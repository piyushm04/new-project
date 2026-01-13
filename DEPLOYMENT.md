# 🚀 Deployment Guide - Customer Segmentation Dashboard

## Quick Deploy to Streamlit Cloud

### Step 1: Verify Your Repository
Ensure all files are pushed to GitHub:
- ✅ `app.py` - Main application
- ✅ `requirements.txt` - Dependencies
- ✅ `README.md` - Documentation

### Step 2: Deploy on Streamlit Cloud

1. **Go to Streamlit Cloud**: https://share.streamlit.io
2. **Sign in** with your GitHub account
3. **Click "New app"**
4. **Fill in the details**:
   - **Repository**: `piyushm04/new-project`
   - **Branch**: `main`
   - **Main file path**: `app.py`
5. **Click "Deploy"**

### Step 3: Access Your App
Your app will be live at: `https://new-project.streamlit.app` (or similar URL)

## Local Testing Before Deployment

```bash
# Install dependencies
pip install -r requirements.txt

# Run locally
streamlit run app.py
```

## Troubleshooting

### Common Issues:

1. **Import Errors**: Ensure all packages in `requirements.txt` are installed
2. **Data File Missing**: The app auto-generates sample data if `customer_data.csv` is missing
3. **Port Already in Use**: Change port with `streamlit run app.py --server.port 8502`

## Environment Variables (Optional)

Create `.streamlit/config.toml` for custom configuration:

```toml
[server]
port = 8501
enableCORS = false

[theme]
primaryColor = "#1f77b4"
backgroundColor = "#ffffff"
secondaryBackgroundColor = "#f0f2f6"
```

## Performance Tips

- The app uses `@st.cache_data` for data caching
- Large datasets (>100K rows) may need optimization
- Consider using database connections for production

