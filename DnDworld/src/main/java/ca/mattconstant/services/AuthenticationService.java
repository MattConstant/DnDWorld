package ca.mattconstant.services;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ca.mattconstant.beans.Role;
import ca.mattconstant.beans.User;
import ca.mattconstant.models.AuthenticationRequest;
import ca.mattconstant.models.AuthenticationResponse;
import ca.mattconstant.repositories.UserRepository;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AuthenticationService {

	private UserRepository userRepo;
	private PasswordEncoder passwordEncoder;
	private JwtService jwtService;
	private AuthenticationManager authenticationManager;
	
	//a method to register a new user in the database
	//generate a json web token for that user
	
	public AuthenticationResponse register(AuthenticationRequest request) {
		User user = User.builder()
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER)
				.build();
		
		userRepo.save(user);
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
				
	}
	
	//a method to authenticate an existing user and generate 
	//a JWT for that user
	
	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
		User user = userRepo.findByEmail(request.getEmail())
				.orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
		
	}
	
	
	
	
}
