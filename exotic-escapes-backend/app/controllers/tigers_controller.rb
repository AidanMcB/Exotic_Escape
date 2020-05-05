class TigersController < ApplicationController

    def index
        tigers = Tiger.all 
        render(json: tigers)
    end

end