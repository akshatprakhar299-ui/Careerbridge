# MIT ADT Final Jury Report & PPT Capture Checklist

Mapped to the handoff checklist screenshots supplied for this project.

## Project report evidence

- [ ] **Architecture & tech stack:** include `architecture.md`, stack table and request/data-flow diagram.
- [ ] **Database design:** include `database-design.md`, table/field/type list and ER diagram. Clearly label it as the proposed production schema; prototype persistence is localStorage.
- [ ] **Application screenshots:** capture role selection/sign-in, student dashboard, discover filters, opportunity detail/apply, applications/status, profile, recruiter create/edit and admin listing view.
- [ ] **Test cases (minimum 5):** include `qa-test-cases.md` with positive, negative and boundary cases, expected vs actual results and 1–2 validation screenshots.
- [ ] **Defect record:** include `defect-record.md` and the actual bug/fix evidence from your own run.
- [ ] **Simulations list:** include `simulations.md`; explicitly disclose local/mock features versus live integrations.
- [ ] **GitHub contribution proof:** add repository URL and genuine member commit-history screenshots using `contribution-evidence.md`.

## PPT slide outline

1. **Problem & domain** — student opportunity discovery is fragmented; target roles are students, recruiters and platform admins.
2. **Architecture & stack** — show high-level architecture and technologies used in the working prototype.
3. **Core features & change** — summarise student/recruiter/admin journeys and demonstrate the Sprint 2 work-mode filter requirement change.
4. **Testing & challenges** — show five or more test cases, one resolved defect and clearly labelled simulations.
5. **Real vs proposed Agile** — compare the practices actually followed by your team with improvements proposed for future sprints.
6. **Individual contribution** — map each member to modules, files and Git commits.
7. **Demo credentials** — show pre-seeded demo accounts and keep the browser ready for the live walkthrough.

## Live demo sequence (about 5 minutes)

1. Sign in as Student; show dashboard and profile.
2. Discover an internship; filter by AI & Data and Remote; open details and apply.
3. Open My applications and show the new Under review record.
4. Save another opportunity and show it in Saved opportunities.
5. Switch to Recruiter; create or edit a listing and show it in the table.
6. Switch to Admin; show the platform management view.
7. Explain localStorage, mock services and the production architecture gap honestly.
