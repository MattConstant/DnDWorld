package ca.mattconstant.beans;

import java.io.Serializable;

import lombok.Data;

@Data
public class BotRequest implements Serializable {
	private String message;
}

