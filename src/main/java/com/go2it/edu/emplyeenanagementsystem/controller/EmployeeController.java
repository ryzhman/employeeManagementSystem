package com.go2it.edu.emplyeenanagementsystem.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Alex Ryzhkov
 */
//this annotation will work only for MVC templates (no hardcoded HTML in response)
//@Controller
//this will work only for REST calls (no reference to templates)
@RestController
@RequestMapping(value = "/api")
public class EmployeeController {

	@RequestMapping(value = "/welcome", method = RequestMethod.GET)
	public String getHelloWorldMessage() {
		//Use template instead of hard-coded HTML
		//				return "helloWorld.html";

		return "<div style=\"text-align:center;\">" + "<h1>Hello world</h1>"
				+ "<p> This is my first web-page </p>"
				+ "<img src=https://cdn-images-1.medium.com/fit/t/1600/672/0*n-2bW82Z6m6U2bij.jpeg></img>"
				+ "</div>";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public String getHelloWorldMessageForUser(@RequestParam String name) {
		return "<div style=\"text-align:center;\">" + "<h1>Welcome, " + name + "</h1>"
				+ "<p> This is my first web-page </p>" + "</div>";
	}
}
