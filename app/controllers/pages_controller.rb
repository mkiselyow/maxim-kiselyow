class PagesController < ApplicationController
  def landing_page_example
  end

  def adaptive_landing_page_example
  end

  def one_page_store
  end

  def visit_page
    render template: 'pages/visit_page', layout: 'visit_page_layout'
  end
end
