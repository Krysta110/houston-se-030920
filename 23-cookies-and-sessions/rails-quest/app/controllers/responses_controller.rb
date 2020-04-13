class ResponsesController < ApplicationController

    def new
        @number_correct = session[:number_correct]
        @message = flash[:message]
        @question = Question.all.sample
        @question_response = Response.new({ question: @question })
    end

    def create

        if( session[:number_correct] != nil )
            @number_correct = session[:number_correct]
        else
            @number_correct = 0
        end
        
        response = Response.create({
            question_id: params[:response][:question_id],
            answer_id: params[:response][:answer_id]
        })
        if response.question.correct_answer == response.answer
            # @number_correct = @number_correct + 1
            @number_correct += 1
            @message = "Correct"
        else
            @message = "Incorrect"
        end
        
        session[:number_correct] = @number_correct
        flash[:message] = @message
        redirect_to('/random-question')
    end

end
