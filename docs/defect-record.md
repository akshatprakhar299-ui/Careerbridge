# Defect Record

The following are representative defects found during prototype implementation and their resolutions. Keep this file aligned with issues actually observed during your team's test run; do not present simulated defects as production incidents.

| ID | Defect / impact | Root cause | Resolution | Status |
|---|---|---|---|---|
| BUG-01 | Saved opportunity appeared to reset after navigating between pages | View rendering was not consistently re-reading the persisted saved-ID list | Centralized state in `db`, persisted changes through `save()`, and re-rendered from state | Resolved |
| BUG-02 | Applying to an already-applied opportunity could create a duplicate record | Apply handler did not check existing applications for the same opportunity | Added duplicate check in opportunity detail view; button now shows “Already applied” | Resolved |

## Defect handling workflow

1. Record reproducible steps, role, browser and expected/actual behaviour.
2. Assign severity and owner.
3. Fix in a separate change and retest the original scenario.
4. Run regression checks for related modules.
5. Capture before/after evidence for the report.
