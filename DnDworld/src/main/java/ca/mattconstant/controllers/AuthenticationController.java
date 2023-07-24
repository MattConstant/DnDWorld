package ca.mattconstant.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ca.mattconstant.models.AuthenticationRequest;
import ca.mattconstant.models.AuthenticationResponse;
import ca.mattconstant.services.AuthenticationService;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthenticationController {

    private AuthenticationService authenticationService;

    @PostMapping(value="/register", consumes="application/json")
    public ResponseEntity<AuthenticationResponse> register
        (@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping(value="/authenticate", consumes="application/json")
    public ResponseEntity<AuthenticationResponse> authenticate
        (@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }





}