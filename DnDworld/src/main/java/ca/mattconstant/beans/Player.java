package ca.mattconstant.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="player")
public class Player {
	
	@Id
	private String id;
	
	private String name; 
	
	private int armorClass;
	
	private int initiative;
	
	private int perception;
	
	private String cl;
	
	private String race;
	
	private String background;
	
	private String align;
	
	private String speed;
	
	private double prof;
	
	private double str;
	
	private double con;
	
	private double intl;
	
	private double wis;
	
	private double cha;
	
	private double dex;
	
	private String[] skills;
	
	
	

}
