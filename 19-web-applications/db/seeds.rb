Diagnosis.destroy_all
HealthIssue.destroy_all
Patient.destroy_all

josh = Patient.create({ age: 22, name: 'Josh', gender: 'M'})

asthma = HealthIssue.create({ name: 'Asthma' })
arthritis = HealthIssue.create({ name: 'Arthritis' })

Diagnosis.create({ patient_id: josh.id, health_issue_id: arthritis.id })