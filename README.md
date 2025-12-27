# 📊 Customer Segmentation & RFM Analysis Dashboard

An advanced, interactive data analytics dashboard for customer segmentation using RFM (Recency, Frequency, Monetary) analysis and K-Means clustering. This project demonstrates expertise in customer analytics, machine learning, and data visualization.

## 🎯 Project Overview

This comprehensive analytics dashboard provides businesses with deep insights into customer behavior, enabling data-driven decisions for marketing, retention, and revenue optimization strategies.

### Key Features

- **RFM Analysis**: Automated calculation of Recency, Frequency, and Monetary scores for each customer
- **Customer Segmentation**: Intelligent segmentation into 7 business-relevant categories (Champions, Loyal Customers, At Risk, etc.)
- **Machine Learning Clustering**: K-Means clustering with PCA visualization for advanced customer grouping
- **Interactive Visualizations**: Dynamic charts and graphs using Plotly
- **Business Insights**: Actionable recommendations based on customer segments
- **Data Export**: Download analysis results for further processing

## 🚀 Live Demo

**Streamlit Cloud**: [Deploy on Streamlit Cloud](https://streamlit.io/cloud)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Key Metrics](#key-metrics)
- [Customer Segments](#customer-segments)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### 1. RFM Analysis
- **Recency**: Days since last purchase
- **Frequency**: Number of transactions
- **Monetary**: Total revenue per customer
- Automated scoring (1-5 scale) for each metric

### 2. Customer Segmentation
- **Champions**: High-value, frequent, recent customers
- **Loyal Customers**: Regular customers with good value
- **At Risk**: Recent but infrequent customers
- **Hibernating**: Low recency and frequency
- **Potential Loyalists**: Recent customers with growth potential
- **Lost**: Inactive customers
- **Need Attention**: Requires intervention

### 3. Advanced Analytics
- K-Means clustering (5 clusters)
- PCA visualization for cluster analysis
- Statistical analysis of segment characteristics
- Revenue distribution by segment

### 4. Interactive Dashboard
- Real-time filtering by date range, region, and product category
- Dynamic visualizations with Plotly
- Responsive design for all screen sizes
- Export capabilities for reports

## 🛠️ Technologies Used

- **Python 3.8+**: Core programming language
- **Streamlit**: Interactive web application framework
- **Pandas**: Data manipulation and analysis
- **NumPy**: Numerical computing
- **Plotly**: Interactive visualizations
- **Scikit-learn**: Machine learning (K-Means, PCA, StandardScaler)
- **Matplotlib & Seaborn**: Additional visualizations

## 📦 Installation

### Prerequisites
- Python 3.8 or higher
- pip package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/piyushm04/new-project.git
cd new-project
```

### Step 2: Create Virtual Environment (Recommended)
```bash
python -m venv venv

# On Windows
venv\Scripts\activate

# On macOS/Linux
source venv/bin/activate
```

### Step 3: Install Dependencies
```bash
pip install -r requirements.txt
```

## 🎮 Usage

### Run Locally
```bash
streamlit run app.py
```

The dashboard will open in your default web browser at `http://localhost:8501`

### Using Your Own Data
1. Prepare your data in CSV format with the following columns:
   - `CustomerID`: Unique customer identifier
   - `TransactionDate`: Date of transaction (YYYY-MM-DD)
   - `Amount`: Transaction amount
   - `Quantity`: Quantity purchased
   - `ProductCategory`: Product category
   - `Region`: Geographic region

2. Save your file as `customer_data.csv` in the project root directory

3. The app will automatically load your data when you run it

## 📁 Project Structure

```
new-project/
│
├── app.py                 # Main Streamlit application
├── requirements.txt       # Python dependencies
├── README.md             # Project documentation
├── customer_data.csv     # Sample/User data (auto-generated if not present)
├── .gitignore           # Git ignore file
└── .streamlit/          # Streamlit configuration (optional)
```

## 📊 Key Metrics Analyzed

1. **Total Customers**: Number of unique customers
2. **Total Revenue**: Sum of all transaction amounts
3. **Average Transaction Value**: Mean transaction amount
4. **Customer Lifetime Value**: Average revenue per customer
5. **RFM Scores**: Individual and composite scores
6. **Segment Distribution**: Customer count by segment
7. **Cluster Analysis**: ML-based customer groups

## 🎯 Customer Segments Explained

| Segment | Characteristics | Business Action |
|---------|----------------|-----------------|
| **Champions** | High R, F, M scores | Reward programs, VIP treatment |
| **Loyal Customers** | Good R, F, M scores | Upsell, cross-sell opportunities |
| **At Risk** | High R, Low F | Win-back campaigns, special offers |
| **Hibernating** | Low R, High F | Re-engagement campaigns |
| **Potential Loyalists** | High R, Low F | Convert to loyal customers |
| **Lost** | Low R, F, M | Survey to understand churn |
| **Need Attention** | Mixed scores | Investigate and personalize |

## 🚀 Deployment

### Deploy to Streamlit Cloud

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add Customer Segmentation Dashboard"
   git push origin main
   ```

2. **Deploy on Streamlit Cloud**:
   - Go to [share.streamlit.io](https://share.streamlit.io)
   - Sign in with GitHub
   - Click "New app"
   - Select your repository: `piyushm04/new-project`
   - Set main file path: `app.py`
   - Click "Deploy"

3. **Your app will be live at**: `https://your-app-name.streamlit.app`

### Alternative Deployment Options

- **Heroku**: Use Procfile and requirements.txt
- **AWS EC2**: Deploy as a web service
- **Docker**: Containerize the application
- **Google Cloud Run**: Serverless deployment

## 📈 Business Value

This dashboard helps businesses:
- **Identify high-value customers** for targeted marketing
- **Reduce churn** by identifying at-risk customers early
- **Optimize marketing spend** by focusing on profitable segments
- **Increase revenue** through personalized campaigns
- **Improve customer retention** with data-driven strategies

## 🎓 Learning Outcomes

This project demonstrates:
- Advanced data analysis techniques
- Customer segmentation methodologies
- Machine learning implementation
- Interactive dashboard development
- Business intelligence and insights generation
- Data visualization best practices

## 📝 Future Enhancements

- [ ] Real-time data integration
- [ ] Predictive churn modeling
- [ ] Customer lifetime value prediction
- [ ] A/B testing framework
- [ ] Email campaign integration
- [ ] API endpoints for data access
- [ ] Multi-tenant support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Piyush Sunil Molawade**
- GitHub: [@piyushm04](https://github.com/piyushm04)
- LinkedIn: [Piyush Molawade](https://www.linkedin.com/in/piyushmolawade)

## 🙏 Acknowledgments

- Streamlit team for the amazing framework
- Plotly for interactive visualizations
- Scikit-learn for ML algorithms

---

⭐ **Star this repo if you find it helpful!**

📧 **Questions?** Open an issue or reach out via LinkedIn!
