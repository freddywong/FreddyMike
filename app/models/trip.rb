# == Schema Information
#
# Table name: trips
#
#  id          :integer          not null, primary key
#  origin      :string
#  destination :string
#  days        :integer
#  time_period :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#

class Trip < ActiveRecord::Base
  belongs_to :user
end
