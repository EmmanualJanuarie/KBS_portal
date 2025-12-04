type Props = {
  mode: "course" | "module" | "assessment";
  onCancel: () => void;
  onAddModule?: () => void;
  onAddAssessment?: () => void;
  onAddAnotherModule?: () => void;
  onSaveAssessment?: () => void;
  onAddAnotherQuestion?: () => void;
  onSaveCourse?: () => void; // optional
  assessmentQuestionCount?: number;
};

export default function CourseButtons({
  mode,
  onCancel,
  onAddModule,
  onAddAssessment,
  onAddAnotherModule,
  onSaveAssessment,
  onAddAnotherQuestion,
  onSaveCourse,
  assessmentQuestionCount = 0,
}: Props) {
  // Count how many buttons will be rendered
  let buttonCount = 1; // always has cancel
  if (mode === "course") buttonCount += 1; // Add Module
  if (mode === "module") buttonCount += 2; // Add Assessment + Add Another Module
  if (mode === "assessment") {
    if (assessmentQuestionCount < 10) buttonCount += 1; // Add Another Question
    if (assessmentQuestionCount === 10) buttonCount += 1; // Save Assessment
  }
  if (onSaveCourse) buttonCount += 1;

  // Decide if Save Course should be wider & centered
  const saveCourseClasses =
    buttonCount > 3
      ? "btn-type-1 w-full sm:w-2/3 mx-auto"
      : "btn-type-1 w-full sm:w-auto";

  return (
    <div className="flex flex-wrap justify-between mt-5 gap-5">
      {/* Cancel button */}
      <button
        type="button"
        className="btn-type-1 w-full sm:w-auto"
        onClick={onCancel}
      >
        Cancel
      </button>

      {/* Mode-specific buttons */}
      {mode === "course" && (
        <button
          type="button"
          className="btn-type-3 w-full sm:w-auto"
          onClick={onAddModule}
        >
          Add Module
        </button>
      )}

      {mode === "module" && (
        <>
          <button
            type="button"
            className="btn-type-3 w-full sm:w-auto"
            onClick={onAddAssessment}
          >
            Add Assessment
          </button>
          <button
            type="button"
            className="btn-type-2 w-full sm:w-auto"
            onClick={onAddAnotherModule}
          >
            Add Another Module
          </button>
        </>
      )}

      {mode === "assessment" && (
        <>
          {assessmentQuestionCount < 10 && (
            <button
              type="button"
              className="btn-type-3 w-full sm:w-auto"
              onClick={onAddAnotherQuestion}
            >
              Add Another Question
            </button>
          )}
          {assessmentQuestionCount === 10 && (
            <button
              type="button"
              className="btn-type-3 w-full sm:w-auto"
              onClick={onSaveAssessment}
            >
              Save Assessment
            </button>
          )}
        </>
      )}

      {/* Save Course */}
      {onSaveCourse && (
        <button
          type="button"
          className={saveCourseClasses}
          onClick={onSaveCourse}
        >
          Save Course
        </button>
      )}
    </div>
  );
}
