package ca.mattconstant.requests;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

import ca.mattconstant.beans.Choice;
import lombok.Data;

@Data
public class ChatGptResponse implements Serializable {
	private String id;
	private String object;
	private LocalDate created;
	private String model;
	private List<Choice> choices;
}
