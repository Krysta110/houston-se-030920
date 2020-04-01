class ApplicationController < Sinatra::Base
    
    set(:views, 'app/views')

    get('/patient/register') do
        @all_health_issues = HealthIssue.all
        erb(:register)
    end
       
    post('/patients') do 
        @patient = Patient.create({
            name: params[:name],
            age: params[:age],
            gender: params[:gender],
            health_issue_ids: params[:health_issue_ids]
        })
        redirect('/patient/list')
    end

    get('/patient/list') do 
        @patients = Patient.all
        erb(:patient_list)
    end
    
    get('/patient/:id') do 
        @patient = Patient.find(params[:id])
        @all_health_issues = HealthIssue.all
        erb(:patient_details)
    end

    post('/add-diagnosis/:patient_id') do 
        Diagnosis.create({
            health_issue_id: params[:health_issue_id],
            patient_id: params[:patient_id]
        })
        redirect("/patient/#{params[:patient_id]}")
    end

    get('/health-issue/list') do 
        @health_issues = HealthIssue.all
        erb(:health_issue_list)
    end

    get('/health-issues/:id') do 
        @health_issue = HealthIssue.find(params[:id])
        erb(:health_issue_details)
    end

end