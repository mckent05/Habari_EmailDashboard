# 📖 Email Dashboard <a name="about-project"></a>

This project is an Email dashboard replica built with React and JavaScript. It replicates a Gmail-like UI with a sidebar navigation,a searchable inbox, starred filtering, and server-side implemented pagination.

The goal of this project was to design a scalable frontend that fetches and displays large sets of emails efficiently while staying responsive across devices.

🛠 Built With <a name="built-with"></a>
Tech Stack <a name="tech-stack"></a>
<details> <summary>Client</summary> <ul> <li><a href="https://react.dev/">React.js</a></li> <li><a href="https://getbootstrap.com/">Bootstrap 5</a></li> <li><a href="https://tanstack.com/query/latest">TanStack React Query</a></li> <li><a href="https://redux.js.org/">Redux</a></li> </ul> </details> <details> <summary>Server</summary> <ul> <li>Generic REST API (assumed Express/Node backend)</li> </ul> </details>
Key Features <a name="key-features"></a>

📩 Email Inbox UI — Sidebar navigation (Inbox, Sent, Drafts, Starred, Labels).

🔍 Search with Debounce — Avoids unnecessary requests by waiting for typing to stop.

⭐ Starred Filter — Shows only starred emails when enabled (optional param).

📑 Server-side Pagination — Efficiently loads data in chunks, not all at once.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
🚀 Live Demo <a name="live-demo"></a>

Replace with your deployed link.

Live Demo Link

<p align="right">(<a href="#readme-top">back to top</a>)</p>
💻 Getting Started <a name="getting-started"></a>
Prerequisites

You need the following installed:

Node.js >= 16

npm or yarn

Setup

Clone this repository to your local machine:

  git clone https://github.com/mckent05/Habari_EmailDashboard.git
  cd email-dashboard

Install

Install dependencies:

  ```sh
    npm install
  ```
Usage

Run the development server:

  ```sh
  npm start
  ```
Run tests

Add test runner when available, e.g. jest or vitest.

## Deployment

You can deploy using Vercel, Netlify, or GitHub Pages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
⚡ Server-Side Pagination Approach

Instead of loading all emails into memory, the dashboard requests only a slice of the dataset per page.
This approach was chosen because it computes faster, hence improving the performance of the application. Instead 
of performing the pagination on the client side and loading all emails into memory, this approach ensures the pagination is smooth.

Frontend sends:

/api/emails?page=2&limit=15&search=hello&filter=inbox

Backend responds with:
```sh
{
  "data":Array(15),
  "pagination": {
    "page": 2,
    "limit": 15,
    "total": 165,
    "totalPages": 11
  }
}
```
The UI shows the start and end of the total and updates navigation buttons accordingly.

isStarred is only sent when true, reducing unnecessary query params.

This approach ensures:

Lower network usage (only fetch what’s needed).

Faster rendering performance on large inboxes.

Accurate results with filtering and searching.

## ⚖️ Tradeoffs, Performance Decisions & Assumptions
Tradeoffs

Used server-side pagination: This help with better scalability vs. slightly higher API complexity.

Sidebar is always visible on the desktop.

Chose Bootstrap over custom CSS frameworks: faster dev time but less design flexibility.

## Performance Decisions

Added debounce (3s) for search to avoid excessive API calls. 

Implemented keepPreviousData in React Query so pages don’t blank out during transitions.

Optional isStarred param → reduces unnecessary backend filtering when not needed.

## Assumptions

The backend handles filtering and searching efficiently (e.g., via indexed database queries).

Emails dataset can be large, so pagination is necessary.

👥 Authors <a name="authors"></a>

👤 Your Name

GitHub: @mckent05

LinkedIn: [@temitope](https://www.linkedin.com/in/akinladetemitope)

🔭 Future Features <a name="future-features"></a>

 Bulk actions (archive, delete, mark as read/unread).

 Email details preview pane.

 Infinite scroll option as an alternative to pagination.

🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!
Please check the issues page
.

⭐️ Show your support <a name="support"></a>

If you found this helpful, please ⭐ the repo and share with others!

🙏 Acknowledgements <a name="acknowledgements"></a>

Special thanks to open-source contributors of React Query, Bootstrap, and React for making development easier.

📝 License <a name="license"></a>

This project is MIT licensed.
