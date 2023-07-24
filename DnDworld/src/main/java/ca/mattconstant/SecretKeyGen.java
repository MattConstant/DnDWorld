package ca.mattconstant;

import io.jsonwebtoken.io.Encoders;

public class SecretKeyGen {

	public static void main(String[] args) {
		String genSecretKey = Encoders.BASE64.encode("this is going to be a secret key - some meow meow information this meow should be of sufficient length!".getBytes());
		System.out.println(genSecretKey);

	}

}
