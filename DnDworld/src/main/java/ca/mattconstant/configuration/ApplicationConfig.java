//package ca.mattconstant.configuration;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
////import org.springframework.security.authentication.AuthenticationManager;
////import org.springframework.security.authentication.AuthenticationProvider;
////import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
////import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
////import org.springframework.security.core.userdetails.UserDetailsService;
////import org.springframework.security.core.userdetails.UsernameNotFoundException;
////import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
////import org.springframework.security.crypto.password.PasswordEncoder;
//
//import ca.mattconstant.repositories.UserRepository;
//import lombok.AllArgsConstructor;
//
//@Configuration
//@AllArgsConstructor
//public class ApplicationConfig {
//private UserRepository userRepo;
//	
////	//find the user in the database by their username
////	//throw an exception if the user is not found
////	@Bean
////	public UserDetailsService userDetailsService() {
////		return username -> userRepo.findByEmail(username)
////				.orElseThrow(()-> new UsernameNotFoundException("User not found"));
////	}
////	
////	//set up our authentication through the database with a password encoder
////	
////	@Bean
////	public AuthenticationProvider authenticationProvider() {
////		DaoAuthenticationProvider authProvider
////		= new DaoAuthenticationProvider();
////		authProvider.setUserDetailsService(userDetailsService());
////		authProvider.setPasswordEncoder(passwordEncoder());
////		return authProvider;
////	}
////	
////	//get an instance of the spring authentication manager
////	@Bean
////	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
////		return config.getAuthenticationManager();
////	}
////	//set up the password encoder
////	@Bean
////	public PasswordEncoder passwordEncoder() {
////		return new BCryptPasswordEncoder();
////	}
//}
