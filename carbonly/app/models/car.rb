# == Schema Information
#
# Table name: cars
#
#  id            :integer          not null, primary key
#  brandmodel    :string
#  emissionperkm :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Car < ActiveRecord::Base
  searchkick
end
