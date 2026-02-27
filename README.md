# ViralTube AI 🚀
**Premium CTR Optimizer & AI Title Generator**

ViralTube AI is a world-class, premium open-source web application designed to help content creators maximize their YouTube Click-Through Rates (CTR) and SEO. By harnessing the power of Large Language Models, ViralTube AI analyzes your video concepts and generates high-performing titles paired with predictive CTR metrics and sentiment analysis.

![ViralTube AI Showcase](https://via.placeholder.com/1200x630.png?text=ViralTube+AI+-+Premium+Dashboard)

## ✨ Features
- **AI-Powered Title Generation:** Input a raw topic, and instantly receive highly engaging, viral-worthy title variations.
- **Predictive CTR Analysis:** Get a statistically backed, simulated Click-Through Rate projection before you even hit record.
- **SEO Scoring:** Built-in SEO evaluation to ensure your titles rank perfectly on YouTube search.
- **Sentiment & Vibe Detection:** Analyzes the psychological hook of the title (e.g., Controversial, Educational, Emotional).
- **Premium Dashboard Experience:** Designed with a stunning, glassmorphism-inspired dark mode UI, complete with neon ambient glows and fluid animations resembling industry standards like Vercel and Stripe.

## 🛠️ Tech Stack
- **Frontend:** Next.js 14+ (App Router), React, Tailwind CSS, Lucide Icons.
- **Backend:** FastAPI, Python, Pydantic, Uvicorn.
- **Styling:** Custom Tailwind configurations with dynamic shimmering skeleton loaders and backdrop blur utilities.

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/viraltube-ai.git
cd viraltube-ai
```

### 2. Setup the Frontend (Next.js)
```bash
cd frontend
npm install
npm install lucide-react # Ensure icon library is installed
npm run dev
```
*Your stunning frontend will now be running on `http://localhost:3000`.*

### 3. Setup the Backend (FastAPI)
```bash
cd ../backend
python -m venv venv
# On Windows: venv\Scripts\activate
# On Mac/Linux: source venv/bin/activate
pip install fastapi uvicorn pydantic
uvicorn app.main:app --reload --port 8000
```
*Your lightning-fast API will be available at `http://localhost:8000` with automatic interactive documentation at `/docs`.*

## 🎨 UI/UX Design Notes
To experience the true premium feel, ensure your `tailwind.config.ts` incorporates the required custom animations:
```typescript
theme: {
  extend: {
    keyframes: {
      shimmer: {
        '100%': { transform: 'translateX(100%)' },
      },
    },
  },
}
```

## 🤝 Contributing
We welcome contributions! Please open an issue or submit a pull request if you want to improve the codebase or add new AI features.

## 📜 License
This project is licensed under the MIT License - see the LICENSE file for details.
