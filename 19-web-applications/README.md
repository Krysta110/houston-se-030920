
Patient   HealthIssue

# As a User I should be able to
<!-- * see a list of patient -->
    <!-- * Click on a patient to see the  health issues -->
<!-- * see a list of health issues -->
    <!-- * Click on an health issue to see a list of patients that have that health issue -->
<!-- * Register a new patient -->
<!-- * Record health issues for the patient -->

Patient -< Diagnosis >- HealthIssue 

<!-- Patient -< Organ >-  OrganDonor --> <- This would work w/ different user stories
<!-- Patient -< Heart >- HealthIssue --> <- A Patient does not have many hearts

Create a patient table
    * name
    * age
    * gender
    * (model) 
    * has_many(:diagnoses)
    * has_many(:health_issues, through: :diagnoses)

Create diganosis table
    * name (source of diagnosis)
    * health_issue_id
    * patient_id

Create HealthIssue table
    * name