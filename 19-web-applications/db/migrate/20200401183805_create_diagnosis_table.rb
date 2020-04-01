class CreateDiagnosisTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:diagnoses) do | t |
      t.string(:name)
      t.integer(:health_issue_id)
      t.integer(:patient_id)
    end
  end
end
