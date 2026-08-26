from pathlib import Path

from gtts import gTTS


OUTPUT_DIR = Path(__file__).resolve().parent.parent / "audio"

SCRIPTS = {
    "d06_thought_groups.mp3": (
        "The agent reads the user request. It chooses an action and uses a tool. "
        "The system checks the final result. A risky action needs verification. "
        "The worker stops when the budget ends."
    ),
    "d26_paper_summary.mp3": (
        "The paper studies a verification checklist for small agents. The checklist "
        "asks the agent to predict the result and inspect it afterward. Verified "
        "success rises from sixty-eight percent to eighty-four percent. Duplicate "
        "submissions fall, but the agent uses more steps. The environment is synthetic, "
        "so the result may not generalize. The evidence suggests a useful control, "
        "but it does not prove universal success."
    ),
    "matched_form_b.mp3": (
        "An AI workflow receives a request from a user. It divides the request into "
        "steps, calls a tool, and records each result. A reliable workflow does not "
        "trust every success message. The system checks the expected final state, total "
        "cost, and remaining time. It also stores an operation ID before a risky external "
        "action. If the outcome is unknown, the workflow looks up that ID before it tries "
        "again. These controls help the system resume after a crash without silently "
        "repeating an effect. A human must approve actions that send messages or change "
        "customer data."
    ),
    "practice_abstract.mp3": (
        "Tool-using agents can complete useful tasks, but they may also repeat actions, "
        "stop too early, or report success without checking the environment. This practice "
        "study examines whether a short verification checklist improves the reliability "
        "of a small document-processing agent."
    ),
}


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for filename, text in SCRIPTS.items():
        target = OUTPUT_DIR / filename
        gTTS(text=text, lang="en", slow=False).save(target.as_posix())
        print(f"{target.name}\t{target.stat().st_size}")


if __name__ == "__main__":
    main()
