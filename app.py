import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from plotly.subplots import make_subplots
import seaborn as sns
import matplotlib.pyplot as plt
from datetime import datetime, timedelta
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import warnings
warnings.filterwarnings('ignore')

# Page configuration
st.set_page_config(
    page_title="Customer360 Dashboard - RFM Analysis",
    page_icon="📊",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS
st.markdown("""
    <style>
    .main-header {
        font-size: 3rem;
        font-weight: bold;
        color: #1f77b4;
        text-align: center;
        padding: 1rem;
    }
    .metric-card {
        background-color: #f0f2f6;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 4px solid #1f77b4;
    }
    .stMetric {
        background-color: white;
        padding: 1rem;
        border-radius: 0.5rem;
    }
    </style>
""", unsafe_allow_html=True)

@st.cache_data
def load_data():
    """Load or generate sample customer transaction data"""
    try:
        df = pd.read_csv('customer_data.csv')
    except:
        # Generate synthetic data if file doesn't exist
        np.random.seed(42)
        n_customers = 2000
        n_transactions = 15000
        
        customer_ids = [f'CUST_{i:05d}' for i in range(1, n_customers + 1)]
        
        data = []
        base_date = datetime(2023, 1, 1)
        
        for _ in range(n_transactions):
            customer_id = np.random.choice(customer_ids)
            days_ago = np.random.randint(0, 730)  # Last 2 years
            transaction_date = base_date + timedelta(days=days_ago)
            amount = np.random.lognormal(mean=4.5, sigma=1.2)
            quantity = np.random.poisson(lam=2) + 1
            
            data.append({
                'CustomerID': customer_id,
                'TransactionDate': transaction_date,
                'Amount': round(amount, 2),
                'Quantity': quantity,
                'ProductCategory': np.random.choice(['Electronics', 'Clothing', 'Food', 'Books', 'Home & Garden']),
                'Region': np.random.choice(['North', 'South', 'East', 'West', 'Central'])
            })
        
        df = pd.DataFrame(data)
        df['TransactionDate'] = pd.to_datetime(df['TransactionDate'])
        df.to_csv('customer_data.csv', index=False)
    
    return df

@st.cache_data
def calculate_rfm(df):
    """Calculate RFM metrics for each customer"""
    reference_date = df['TransactionDate'].max() + timedelta(days=1)
    
    rfm = df.groupby('CustomerID').agg({
        'TransactionDate': lambda x: (reference_date - x.max()).days,  # Recency
        'CustomerID': 'count',  # Frequency
        'Amount': 'sum'  # Monetary
    }).rename(columns={
        'TransactionDate': 'Recency',
        'CustomerID': 'Frequency',
        'Amount': 'Monetary'
    })
    
    # RFM Scoring (1-5 scale, where 5 is best)
    rfm['R_Score'] = pd.qcut(rfm['Recency'].rank(method='first'), 5, labels=[5,4,3,2,1])
    rfm['F_Score'] = pd.qcut(rfm['Frequency'].rank(method='first'), 5, labels=[1,2,3,4,5])
    rfm['M_Score'] = pd.qcut(rfm['Monetary'].rank(method='first'), 5, labels=[1,2,3,4,5])
    
    rfm['R_Score'] = rfm['R_Score'].astype(int)
    rfm['F_Score'] = rfm['F_Score'].astype(int)
    rfm['M_Score'] = rfm['M_Score'].astype(int)
    
    rfm['RFM_Score'] = rfm['R_Score'].astype(str) + rfm['F_Score'].astype(str) + rfm['M_Score'].astype(str)
    
    # Customer Segments based on RFM
    def segment_customer(row):
        if row['R_Score'] >= 4 and row['F_Score'] >= 4 and row['M_Score'] >= 4:
            return 'Champions'
        elif row['R_Score'] >= 3 and row['F_Score'] >= 3 and row['M_Score'] >= 3:
            return 'Loyal Customers'
        elif row['R_Score'] >= 4 and row['F_Score'] <= 2:
            return 'At Risk'
        elif row['R_Score'] <= 2 and row['F_Score'] >= 3:
            return 'Hibernating'
        elif row['R_Score'] >= 3 and row['F_Score'] <= 2:
            return 'Potential Loyalists'
        elif row['R_Score'] <= 2 and row['F_Score'] <= 2:
            return 'Lost'
        else:
            return 'Need Attention'
    
    rfm['Segment'] = rfm.apply(segment_customer, axis=1)
    
    return rfm

@st.cache_data
def perform_clustering(rfm):
    """Perform K-Means clustering on RFM metrics"""
    # Prepare data for clustering
    rfm_features = rfm[['Recency', 'Frequency', 'Monetary']].copy()
    
    # Log transform to handle skewness
    rfm_features['Recency'] = np.log1p(rfm_features['Recency'])
    rfm_features['Frequency'] = np.log1p(rfm_features['Frequency'])
    rfm_features['Monetary'] = np.log1p(rfm_features['Monetary'])
    
    # Standardize
    scaler = StandardScaler()
    rfm_scaled = scaler.fit_transform(rfm_features)
    
    # K-Means clustering
    kmeans = KMeans(n_clusters=5, random_state=42, n_init=10)
    rfm['Cluster'] = kmeans.fit_predict(rfm_scaled)
    
    # PCA for visualization
    pca = PCA(n_components=2)
    rfm_pca = pca.fit_transform(rfm_scaled)
    rfm['PCA1'] = rfm_pca[:, 0]
    rfm['PCA2'] = rfm_pca[:, 1]
    
    return rfm, pca

def main():
    st.markdown('<h1 class="main-header">📊 Customer360 Dashboard - RFM Analysis & Segmentation</h1>', unsafe_allow_html=True)
    st.markdown("---")
    
    # Load data
    df = load_data()
    
    # Sidebar filters
    st.sidebar.header("🔍 Filters")
    
    date_range = st.sidebar.date_input(
        "Select Date Range",
        value=(df['TransactionDate'].min().date(), df['TransactionDate'].max().date()),
        min_value=df['TransactionDate'].min().date(),
        max_value=df['TransactionDate'].max().date()
    )
    
    if len(date_range) == 2:
        start_date, end_date = date_range
        df_filtered = df[(df['TransactionDate'].date() >= start_date) & (df['TransactionDate'].date() <= end_date)]
    else:
        df_filtered = df.copy()
    
    region_filter = st.sidebar.multiselect(
        "Select Regions",
        options=df['Region'].unique(),
        default=df['Region'].unique()
    )
    
    category_filter = st.sidebar.multiselect(
        "Select Categories",
        options=df['ProductCategory'].unique(),
        default=df['ProductCategory'].unique()
    )
    
    df_filtered = df_filtered[
        (df_filtered['Region'].isin(region_filter)) &
        (df_filtered['ProductCategory'].isin(category_filter))
    ]
    
    # Calculate RFM
    rfm = calculate_rfm(df_filtered)
    
    # Key Metrics
    st.header("📈 Key Performance Indicators")
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.metric("Total Customers", f"{len(rfm):,}")
    with col2:
        st.metric("Total Revenue", f"${rfm['Monetary'].sum():,.2f}")
    with col3:
        st.metric("Avg Transaction Value", f"${df_filtered['Amount'].mean():.2f}")
    with col4:
        st.metric("Avg Customer Lifetime Value", f"${rfm['Monetary'].mean():.2f}")
    
    st.markdown("---")
    
    # RFM Analysis Section
    st.header("🎯 RFM Analysis")
    
    col1, col2 = st.columns(2)
    
    with col1:
        # RFM Score Distribution
        fig_rfm_dist = px.histogram(
            rfm,
            x='RFM_Score',
            title='RFM Score Distribution',
            color_discrete_sequence=['#1f77b4']
        )
        fig_rfm_dist.update_layout(height=400)
        st.plotly_chart(fig_rfm_dist, use_container_width=True)
    
    with col2:
        # Segment Distribution
        segment_counts = rfm['Segment'].value_counts()
        fig_segments = px.pie(
            values=segment_counts.values,
            names=segment_counts.index,
            title='Customer Segment Distribution',
            color_discrete_sequence=px.colors.qualitative.Set3
        )
        fig_segments.update_layout(height=400)
        st.plotly_chart(fig_segments, use_container_width=True)
    
    # RFM Metrics by Segment
    st.subheader("📊 RFM Metrics by Customer Segment")
    segment_metrics = rfm.groupby('Segment').agg({
        'Recency': 'mean',
        'Frequency': 'mean',
        'Monetary': 'mean',
        'CustomerID': 'count'
    }).round(2).rename(columns={'CustomerID': 'Count'})
    segment_metrics = segment_metrics.sort_values('Monetary', ascending=False)
    st.dataframe(segment_metrics, use_container_width=True)
    
    # RFM Heatmap
    st.subheader("🔥 RFM Score Heatmap")
    rfm_pivot = rfm.groupby(['R_Score', 'F_Score'])['Monetary'].mean().reset_index()
    rfm_pivot = rfm_pivot.pivot(index='R_Score', columns='F_Score', values='Monetary')
    
    fig_heatmap = px.imshow(
        rfm_pivot,
        labels=dict(x="Frequency Score", y="Recency Score", color="Avg Monetary Value"),
        title="RFM Score Heatmap - Average Monetary Value",
        color_continuous_scale="Viridis"
    )
    fig_heatmap.update_layout(height=500)
    st.plotly_chart(fig_heatmap, use_container_width=True)
    
    st.markdown("---")
    
    # Customer Segmentation (Clustering)
    st.header("🔬 Advanced Customer Segmentation (K-Means Clustering)")
    
    rfm_clustered, pca_model = perform_clustering(rfm)
    
    col1, col2 = st.columns(2)
    
    with col1:
        # Cluster Distribution
        cluster_counts = rfm_clustered['Cluster'].value_counts().sort_index()
        fig_clusters = px.bar(
            x=cluster_counts.index,
            y=cluster_counts.values,
            title='Customer Distribution by Cluster',
            labels={'x': 'Cluster', 'y': 'Number of Customers'},
            color=cluster_counts.values,
            color_continuous_scale="Blues"
        )
        fig_clusters.update_layout(height=400, showlegend=False)
        st.plotly_chart(fig_clusters, use_container_width=True)
    
    with col2:
        # Cluster Characteristics
        cluster_metrics = rfm_clustered.groupby('Cluster').agg({
            'Recency': 'mean',
            'Frequency': 'mean',
            'Monetary': 'mean'
        }).round(2)
        
        fig_cluster_metrics = go.Figure()
        fig_cluster_metrics.add_trace(go.Bar(
            name='Recency',
            x=cluster_metrics.index,
            y=cluster_metrics['Recency'],
            marker_color='#1f77b4'
        ))
        fig_cluster_metrics.add_trace(go.Bar(
            name='Frequency',
            x=cluster_metrics.index,
            y=cluster_metrics['Frequency'],
            marker_color='#ff7f0e'
        ))
        fig_cluster_metrics.add_trace(go.Bar(
            name='Monetary',
            x=cluster_metrics.index,
            y=cluster_metrics['Monetary'],
            marker_color='#2ca02c'
        ))
        fig_cluster_metrics.update_layout(
            title='Average RFM Metrics by Cluster',
            xaxis_title='Cluster',
            yaxis_title='Value',
            barmode='group',
            height=400
        )
        st.plotly_chart(fig_cluster_metrics, use_container_width=True)
    
    # 3D Scatter Plot
    st.subheader("🌐 Customer Clusters Visualization (PCA)")
    fig_3d = px.scatter(
        rfm_clustered,
        x='PCA1',
        y='PCA2',
        color='Cluster',
        size='Monetary',
        hover_data=['Recency', 'Frequency', 'Monetary'],
        title='Customer Clusters (PCA Visualization)',
        color_discrete_sequence=px.colors.qualitative.Set3
    )
    fig_3d.update_layout(height=600)
    st.plotly_chart(fig_3d, use_container_width=True)
    
    st.markdown("---")
    
    # Business Insights
    st.header("💡 Business Insights & Recommendations")
    
    insights_col1, insights_col2 = st.columns(2)
    
    with insights_col1:
        st.subheader("🎯 Segment-Based Recommendations")
        
        champions = len(rfm[rfm['Segment'] == 'Champions'])
        at_risk = len(rfm[rfm['Segment'] == 'At Risk'])
        hibernating = len(rfm[rfm['Segment'] == 'Hibernating'])
        
        st.info(f"**Champions ({champions} customers)**: Reward them, VIP programs, exclusive offers")
        st.warning(f"**At Risk ({at_risk} customers)**: Win-back campaigns, special discounts")
        st.error(f"**Hibernating ({hibernating} customers)**: Re-engagement campaigns, surveys")
    
    with insights_col2:
        st.subheader("📈 Revenue Opportunities")
        
        top_segment = rfm.groupby('Segment')['Monetary'].sum().sort_values(ascending=False).index[0]
        top_revenue = rfm.groupby('Segment')['Monetary'].sum().sort_values(ascending=False).iloc[0]
        
        st.success(f"**Top Revenue Segment**: {top_segment} (${top_revenue:,.2f})")
        st.info(f"**Focus Area**: Target 'Potential Loyalists' for upselling")
        st.warning(f"**Action Required**: {len(rfm[rfm['Segment'] == 'Lost'])} customers need immediate attention")
    
    st.markdown("---")
    
    # Data Export
    st.header("📥 Export Data")
    col1, col2 = st.columns(2)
    
    with col1:
        if st.button("Download RFM Analysis (CSV)"):
            csv = rfm.to_csv(index=True)
            st.download_button(
                label="Click to Download",
                data=csv,
                file_name=f"rfm_analysis_{datetime.now().strftime('%Y%m%d')}.csv",
                mime="text/csv"
            )
    
    with col2:
        if st.button("Download Customer Segments (CSV)"):
            segment_export = rfm_clustered[['Recency', 'Frequency', 'Monetary', 'Segment', 'Cluster']].copy()
            csv = segment_export.to_csv(index=True)
            st.download_button(
                label="Click to Download",
                data=csv,
                file_name=f"customer_segments_{datetime.now().strftime('%Y%m%d')}.csv",
                mime="text/csv"
            )
    
    # Footer
    st.markdown("---")
    st.markdown(
        """
        <div style='text-align: center; color: gray; padding: 1rem;'>
            <p>Customer360 Dashboard | Built with Streamlit</p>
            <p>📊 Advanced Analytics | 🎯 Business Intelligence | 💡 Actionable Insights</p>
        </div>
        """,
        unsafe_allow_html=True
    )

if __name__ == "__main__":
    main()

