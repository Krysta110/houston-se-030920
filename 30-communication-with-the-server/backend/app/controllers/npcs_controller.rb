class NpcsController < ApplicationController

    before_action :define_current_npc
    
    def create
        npc = Npc.create(npc_params)
        render json: npc
    end
    
    def index
        render json: Npc.all, include: [ :steps ]
    end
    
    def show
        render json: current_npc
    end
    
    def update
        current_npc.update(npc_params)
        render json: current_npc
    end
    
    def destroy
        current_npc.destroy
        render json: current_npc
    end
    
    def npc_params
        params.permit()
    end
    
    def define_current_npc
        if params[:id]
            @current_npc = Npc.find(params[:id])
        else
            @current_npc = Npc.new
        end
    end
    
    def current_npc
        @current_npc
    end

end
