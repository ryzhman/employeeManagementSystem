package com.go2it.edu.emplyeenanagementsystem.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * @author Alex Ryzhkov
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	public SecurityConfig() {
		super();
		SecurityContextHolder.setStrategyName(SecurityContextHolder.MODE_INHERITABLETHREADLOCAL);
	}

	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
		auth.inMemoryAuthentication()
				.withUser("admin")
				.password(encoder().encode("adminPass"))
				.roles("ADMIN")
				.and()
				.withUser("user")
				.password(encoder().encode("userPass"))
				.roles("USER");
	}

	@Bean
	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf()
				.disable()
				.httpBasic()
				.and()
				.authorizeRequests()
				//conventional REST API
				//				even anonymous user is authenthicated
				//				.authenticated()
				//				 .hasAnyRole()
				.antMatchers("/api/employees/**")
				.hasAnyRole("ADMIN", "USER")
				//MVC part - React pages
				.antMatchers(HttpMethod.GET, "/index*", "/static/**", "/*.js", "/*.json", "/*.ico")
				.permitAll()
				//All the rest of requests
				.anyRequest()
				.authenticated()
				.and()
				//Login part
				.formLogin()
				.loginPage("/login.html")
				.permitAll()
				//form data will be POST to this API
				.loginProcessingUrl("/perform_login")
				.failureForwardUrl("/login.html?error=true")
				.defaultSuccessUrl("/index.html", true)
				.and()
				.logout()
				.logoutUrl("/perform_logout")
				.logoutSuccessUrl("/index.html")
				.deleteCookies("JSESSIONID");
	}
}
