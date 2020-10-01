import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const appJson = {
	"NAME": "KVP",
	"LOGO": "https:\/\/google.com",
	"ADDRESS": "Doddathogur, ECity, Bangalore",
	"EMAIL": "test@gmail.com",
	"MENU": {
		"HOME": {
			"LABEL": "Home",
			"TYPE": "static",
			"CONTENT": "to be placed..."
		},
		"GALLERY": {
			"LABEL": "Our Gallery",
			"TYPE": "gallery",
			"CONTENT": {
				"body": "content...",
				"images": ["a.jpg", "b.jpg", "c.png"]
			}
		},
		"ABOUT_US": {
			"LABEL": "About Us",
			"TYPE": "static",
			"CONTENT": "about us"
		},
		"CONTACT_US": {
			"LABEL": "Contact Us",
			"TYPE": "form",
			"CONTENT": {
				"FORM_ID": "11112222333",
				"FORM_CONFIG": [{
					"FIELD_LABEL": "Name",
					"FIELD_NAME": "Name__c",
					"FIELD_TYPE": "text",
					"FIELD_VALIDATION": "required",
					"FIELD_OPTIONS": []
				}, {
					"FIELD_LABEL": "Email",
					"FIELD_NAME": "Email__c",
					"FIELD_TYPE": "text",
					"FIELD_VALIDATION": "required|email",
					"FIELD_OPTIONS": []
				}, {
					"FIELD_LABEL": "Country",
					"FIELD_NAME": "Country__c",
					"FIELD_TYPE": "picklist",
					"FIELD_VALIDATION": "",
					"FIELD_OPTIONS": [{
						"1": "Option 1"
					}, {
						"2": "Option 2"
					}, {
						"3": "Option 3"
					}]
				}]
			}
		},
		"REGISTRATION": {
			"LABEL": "Registration",
			"TYPE": "form",
			"CONTENT": {
				"FORM_ID": "11112222444",
				"FORM_CONFIG": [{
					"FIELD_LABEL": "Name",
					"FIELD_NAME": "Name__c",
					"FIELD_TYPE": "text",
					"FIELD_VALIDATION": "required",
					"FIELD_OPTIONS": []
				}, {
					"FIELD_LABEL": "Email",
					"FIELD_NAME": "Email__c",
					"FIELD_TYPE": "text",
					"FIELD_VALIDATION": "required|email",
					"FIELD_OPTIONS": []
				}, {
					"FIELD_LABEL": "Phone",
					"FIELD_NAME": "Phone__c",
					"FIELD_TYPE": "text",
					"FIELD_VALIDATION": "required|mobile",
					"FIELD_OPTIONS": []
				}, {
					"FIELD_LABEL": "Password",
					"FIELD_NAME": "Password__c",
					"FIELD_TYPE": "password",
					"FIELD_VALIDATION": "required",
					"FIELD_OPTIONS": []
				}]
			}
		},
		"SIGNIN": {
			"LABEL": "Sign In",
			"TYPE": "form",
			"CONTENT": {
				"FORM_ID": "11112222555",
				"FORM_CONFIG": [{
					"FIELD_LABEL": "Email\/Mobile",
					"FIELD_NAME": "Username__c",
					"FIELD_TYPE": "text",
					"FIELD_VALIDATION": "required",
					"FIELD_OPTIONS": []
				}, {
					"FIELD_LABEL": "Password",
					"FIELD_NAME": "Password__c",
					"FIELD_TYPE": "password",
					"FIELD_VALIDATION": "required",
					"FIELD_OPTIONS": []
				}]
			}
		}
	}
}
  
export default appJson