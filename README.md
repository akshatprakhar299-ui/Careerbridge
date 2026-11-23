# CareerBridge — Internship & Opportunities Portal

A responsive, browser-runnable prototype for an internship and student-opportunities platform. The product takes broad feature inspiration from opportunity platforms such as Unstop, while using an original CareerBridge identity, navigation structure, copy and visual design.

## Run the prototype

**Fastest option:** open `index.html` in a modern browser. No installation, API key or build step is required.

**Recommended local server:**

```bash
cd careerbridge-portal
python3 -m http.server 5500
```

Then visit `http://localhost:5500`.

## Demo access

Open the three-dot menu beside the profile at the bottom of the sidebar, then choose **Sign in / Create account**. The sign-in form is prefilled with the student demo. The local prototype accepts the demo identities below; the password is `demo1234`.

| Role | Demo email | Password |
|---|---|---|
| Student | `student@careerbridge.demo` | `demo1234` |
| Recruiter | `recruiter@careerbridge.demo` | `demo1234` |
| Admin | `admin@careerbridge.demo` | `demo1234` |

You can also switch role directly from the sidebar three-dot menu. This is a demo role switcher, not production authentication.

## Implemented prototype features

- Student overview dashboard, profile editing, resume file selection, saved opportunities, notifications and application tracking.
- Opportunity discovery with keyword search, type tabs, category and work-mode filters.
- Opportunity detail view and apply flow, including duplicate-application prevention.
- Internship, hackathon, event and course opportunity types.
- Recruiter workspace to create, edit and delete opportunity listings.
- Admin workspace using the same listing-management prototype controls.
- Responsive desktop and mobile navigation.
- Local persistence using browser `localStorage`; refresh the page and demo data remains available.

## Technology and scope

- Frontend: HTML5, CSS3, vanilla JavaScript.
- Persistence: browser `localStorage` seeded with sample records.
- External dependencies: Google Fonts only; the app itself has no runtime package dependencies.
- The prototype intentionally simulates authentication, notifications, resume upload, applications and recruiter/admin operations locally. It does **not** send data to a server, verify identity, store files remotely, send email, or connect to real employer APIs. Do not use real personal or medical information.

## Project handoff documentation

See `docs/` for architecture and request flow, database/schema proposal, QA test cases, defect log, simulated integrations, Agile review, individual contribution evidence template, and PPT/report capture checklist.
