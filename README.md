# WaitBee - Launch Your Product with a Viral Waitlist

<kbd>
<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/29a10a9e-b219-4453-a729-84db7b042808" />
</kbd>
<br><br>

> **The open-source waitlist platform for founders & developers.** Build high-converting waitlist pages, collect emails, and track growth in minutes—not days.

---

## About WaitBee

WaitBee is a production-ready, open-source platform designed to help startup founders, product teams, and developers create and manage viral waitlists for product launches. Built with modern technologies and best practices, WaitBee provides everything you need to validate demand, build community, and grow your user base before launch.

### Why WaitBee?

- ⚡ **Lightning-Fast Setup** - Create beautiful waitlist pages in under 60 seconds
- 🔒 **Privacy-First** - Open-source means full transparency and control over your data
- 📊 **Powerful Analytics** - Track growth, conversions, and user sources in real-time
- 🎨 **Fully Customizable** - Brand it, theme it, deploy it on your own domain
- 🚀 **Developer-Friendly** - API-ready with webhooks, integrations, and data exports
- 💼 **For Founders & Teams** - Built by founders, for founders scaling from 0 to millions

---

## ✨ Features

### 🎯 Public Waitlist Pages
- Customizable landing pages with your branding
- One-click referral mechanics to drive viral growth
- Mobile-responsive design that works everywhere
- Social proof widgets to increase conversions

### 📊 Admin Dashboard
- Real-time subscriber tracking and analytics
- Segment and manage your audience
- Track conversion funnels and growth metrics
- Email list exports (CSV) for further analysis

### 🔐 Secure Authentication
- User-friendly login and password reset flows
- Admin portal for platform management
- Role-based access control

### ⚙️ Developer Tools
- RESTful API for programmatic access
- Webhook support for real-time events
- Third-party integrations (SendGrid, Stripe, Google Analytics)
- Easy self-hosting and deployment

### 🎨 Customization
- Fully customizable color themes and branding
- Custom domain support
- Adjustable CTA messages and copy
- White-label ready

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ (LTS recommended)
- **npm** or **yarn** package manager
- **PostgreSQL** or compatible database
- **Environment variables** for API keys (see `.env.example`)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chemitha/waitbee.git
   cd waitbee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - `DATABASE_URL` - PostgreSQL connection string
   - `GEMINI_API_KEY` - For AI features (optional)
   - `NEXTAUTH_SECRET` - For authentication
   - `SENDGRID_API_KEY` - For email notifications (optional)

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Deployment

```bash
npm run build
npm start
```

#### Vercel Deployment (Recommended)
```bash
npx vercel
```

#### Docker Deployment
```bash
docker build -t waitbee .
docker run -p 3000:3000 waitbee
```

---

## 📖 Usage Guide

### For Founders & Product Managers

1. **Sign up** at `/signup` to create your account
2. **Create a waitlist** with your product name and description
3. **Customize** the landing page colors, copy, and branding
4. **Share** your unique waitlist link with your audience
5. **Monitor** subscriber growth and analytics in real-time
6. **Export** your email list when ready to launch

### For Developers

#### API Endpoints

```bash
# Get waitlist details
GET /api/waitlists/:id

# Subscribe user to waitlist
POST /api/waitlists/:id/subscribe
Content-Type: application/json
{ "email": "user@example.com" }

# Export subscribers (CSV)
GET /api/waitlists/:id/export

# Analytics
GET /api/waitlists/:id/analytics
```

#### Webhooks

Configure webhooks to receive real-time events:

```bash
POST /api/webhooks/subscribe
POST /api/webhooks/waitlist-created
```

---

## 🏗️ Architecture

Built with modern, scalable technologies:

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Deployment**: Vercel, Docker, self-hosted
- **Integrations**: SendGrid, Stripe, Google Analytics

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Language** | TypeScript (74.8%), CSS (25%), JavaScript (0.2%) |
| **Framework** | Next.js 15 |
| **Styling** | TailwindCSS |
| **Database** | PostgreSQL + Prisma |
| **Auth** | NextAuth.js |
| **Deployment** | Vercel, Docker |

---

## 🤝 Contributing

We love contributions from the community! Whether you're fixing bugs, adding features, or improving documentation, your help makes WaitBee better.

### Getting Started

1. **Fork** the repository
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   ```
3. **Make your changes** and commit with clear messages
   ```bash
   git commit -m "Add: Amazing new feature that does X"
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/your-amazing-feature
   ```
5. **Open a Pull Request** with a description of your changes

### Guidelines

- Follow the existing code style and conventions
- Write tests for new features when appropriate
- Ensure the app builds and runs locally: `npm run dev`
- Update documentation for user-facing changes
- Keep commits atomic and descriptive

### Reporting Issues

Found a bug? Have a feature request? [Open an issue](https://github.com/chemitha/waitbee/issues) with:
- Clear description of the problem
- Steps to reproduce (if applicable)
- Expected vs. actual behavior
- Your environment details

---

## 📄 License

WaitBee is open-source software licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for details.

You're free to use, modify, and distribute WaitBee in your projects, including commercial applications.

---

## 🙋 Support & Community

### Get Help

- 📚 **Documentation**: [Check our docs](https://waitbee-docs.example.com)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/chemitha/waitbee/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/chemitha/waitbee/discussions)
- 📧 **Email**: [support@waitbee.app](mailto:sathsiluchemitha@gmail.com)

### Follow Our Journey

- 🐦 [Twitter](https://x.com/chemitha_s)
- 💼 [LinkedIn](https://linkedin.com/in/chemithasathsilu)
- 🌐 [Website](https://waitbee.vercel.app)

---

## 🎯 Roadmap

- [ ] Mobile app (iOS & Android)
- [ ] Advanced AI-powered copy generation
- [ ] Multi-language support
- [ ] Advanced integrations (Zapier, Make.com)
- [ ] Team collaboration features
- [ ] Premium hosted version

---

## 👨‍💻 Built By

**WaitBee** is created and maintained by [Chemitha Sathsilu](https://github.com/chemitha), with contributions from the amazing open-source community.

---

## 💡 Credits

Special thanks to all our contributors and the amazing open-source community for making this project possible.

---

**[⬆ Back to top](#waitbee---launch-your-product-with-a-viral-waitlist)**
