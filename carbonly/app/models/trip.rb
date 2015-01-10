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
#

class Trip < ActiveRecord::Base
end
