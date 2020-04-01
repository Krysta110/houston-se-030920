class CreateHealthIssueTable < ActiveRecord::Migration[5.2]
  def change
    create_table(:health_issues) do | t |
      t.string(:name)
    end
  end
end
