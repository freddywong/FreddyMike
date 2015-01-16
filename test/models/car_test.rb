# == Schema Information
#
# Table name: cars
#
#  id            :integer          not null, primary key
#  brandmodel    :string
#  emissionperkm :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
