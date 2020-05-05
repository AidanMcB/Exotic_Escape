class TigerMovementsController < ApplicationController

    def index
        tiger_movements = TigerMovement.all 
        render(json: tiger_movements)
    end
end