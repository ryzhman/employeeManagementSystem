package com.go2it.edu.emplyeenanagementsystem.config.security;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.stream.Collectors;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

/**
 * @author Alex Ryzhkov
 */
@Component
public class JwtTokenProvider {

	private static final Logger logger = LoggerFactory.getLogger(JwtTokenProvider.class);

	@Value("${app.jwtSecret}") private String jwtSecret;

	@Value("${app.jwtExpirationInMs}") private int jwtExpirationInMs;

	public String generateToken(Authentication authentication) {

		UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

		LocalDateTime expTime = LocalDateTime.now().plus(jwtExpirationInMs, ChronoUnit.MILLIS);

		JSONObject subjectJSON = new JSONObject();
		subjectJSON.put("uid", Long.toString(userPrincipal.getId()));

		JSONObject roles = new JSONObject();
		roles.put("roles", userPrincipal.getAuthorities()
				.stream()
				.map(role -> role.getAuthority())
				.collect(Collectors.joining(",")));
		subjectJSON.put("roles", roles.toString());
		return Jwts.builder()
				.setSubject(subjectJSON.toString())
				.setIssuedAt(Timestamp.valueOf(LocalDateTime.now()))
				.setExpiration(Timestamp.valueOf(expTime))
				.signWith(SignatureAlgorithm.HS512, jwtSecret)
				.compact();
	}

	public Long getUserIdFromJWT(String token) throws ParseException {
		Claims claims = Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody();
		JSONParser jsonParser = new JSONParser();
		JSONObject jwtJSON = (JSONObject) jsonParser.parse(claims.getSubject());
		return Long.parseLong((String) jwtJSON.get("uid"));
	}

	public boolean validateToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException ex) {
			logger.error("Invalid JWT signature");
		} catch (MalformedJwtException ex) {
			logger.error("Invalid JWT token");
		} catch (ExpiredJwtException ex) {
			logger.error("Expired JWT token");
		} catch (UnsupportedJwtException ex) {
			logger.error("Unsupported JWT token");
		} catch (IllegalArgumentException ex) {
			logger.error("JWT claims string is empty.");
		}
		return false;
	}
}