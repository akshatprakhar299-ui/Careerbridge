# QA Test Cases — Prototype Validation

Run these checks in the browser after opening the app. The expected and actual columns below are the handoff record for the seeded prototype build; re-run on the machine used for the jury demo and update the result if the environment differs.

| ID | Scenario / steps | Expected result | Actual result (prototype build) | Type |
|---|---|---|---|---|
| TC-01 | Open the portal with empty localStorage | Seeded dashboard and opportunity cards load without a blank page | Pass — seeded dashboard and cards render | Positive |
| TC-02 | Open Discover; search `AI`; select AI & Data category | Only matching AI/data opportunities are displayed | Pass — search and category filters narrow the cards | Positive |
| TC-03 | Open an opportunity and click Apply now | Application is added to My applications and a notification is created | Pass — application and notification are stored locally | Positive |
| TC-04 | Apply again to the same opportunity | Duplicate application is prevented; button indicates already applied | Pass — existing application is detected | Boundary |
| TC-05 | Save an opportunity, refresh browser, open Saved opportunities | Saved item remains available after refresh | Pass — saved IDs persist in localStorage | Positive |
| TC-06 | Recruiter creates an opportunity with required fields | New listing appears in catalogue and management table | Pass — listing is inserted and persisted locally | Positive |
| TC-07 | Submit create-opportunity form with title or description blank | Browser required-field validation blocks submission | Pass — required attributes prevent empty submission | Negative |
| TC-08 | Edit an existing listing and save | Existing record updates rather than creating a duplicate | Pass — edit mutates the selected record | Positive |
| TC-09 | Delete a listing from recruiter workspace | Listing disappears from management list and catalogue | Pass — listing is removed from local state | Positive |
| TC-10 | Enter malformed email on profile form | Browser email validation blocks save | Pass — type=email validation is active | Negative |

**Evidence to capture:** dashboard, discover filters, opportunity details, application status table, recruiter create/edit form, admin/recruiter listing table, profile form, and notification state.

**Important limitation:** these are local prototype checks, not penetration, load, accessibility certification or production API tests. A jury demonstration should use the same browser/profile in which localStorage is seeded.
