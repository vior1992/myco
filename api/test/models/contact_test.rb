require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  test "should save new contact" do
    contact = Contact.new(first_name: 'test', last_name: 'model', email: 'test@model.com', phone_number: '00 00 00')

    assert contact.save
  end

  test "should not save contact without required values" do
    contact = Contact.new

    assert_not contact.save
  end

  test "should not save contact when first_name value is empty or blank" do
    contact = Contact.new(first_name: '', last_name: 'model', email: 'test@model.com', phone_number: '00 00 00')

    assert_not contact.save
  end

  test "should not save contact when last_name value is empty or blank" do
    contact = Contact.new(first_name: 'test', last_name: '', email: 'test@model.com', phone_number: '00 00 00')

    assert_not contact.save
  end

  test "should not save contact when email value is empty or blank" do
    contact = Contact.new(first_name: 'test', last_name: 'model', email: '', phone_number: '00 00 00')

    assert_not contact.save
  end

  test "should not save contact when email value not match format validation" do
    contact = Contact.new(first_name: 'test', last_name: 'model', email: 'email.email', phone_number: '00 00 00')

    assert_not contact.save
  end

  test "should not save contact when phone_number value is empty or blank" do
    contact = Contact.new(first_name: 'test', last_name: 'model', email: 'test@model.com', phone_number: '')

    assert_not contact.save
  end

  test "should not save contact when phone_number value not match format validation" do
    contact = Contact.new(first_name: 'test', last_name: 'model', email: 'test@model.com', phone_number: 'number 00')

    assert_not contact.save
  end
end
