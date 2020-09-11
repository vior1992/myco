require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contact = contacts(:one)
  end

  test "should get index" do
    get api_contacts_url, as: :json
    assert_response :success
  end

  test "should create contact" do
    assert_difference('Contact.count') do
      post api_contacts_url, params: { contact: { email: 'test@test.com', first_name: @contact.first_name, last_name: @contact.last_name, phone_number: '+ 00 00 01' } }, as: :json
    end

    assert_response 201
  end

  test "should show contact" do
    get api_contact_url(@contact), as: :json
    assert_response :success
  end

  test "should update contact" do
    patch api_contact_url(@contact), params: { contact: { email: 'test@edited.com', first_name: @contact.first_name, last_name: @contact.last_name, phone_number: '+ 00 00 02' } }, as: :json
    assert_response 200
  end

  test "should destroy contact" do
    assert_difference('Contact.count', -1) do
      delete api_contact_url(@contact), as: :json
    end

    assert_response 204
  end
end
