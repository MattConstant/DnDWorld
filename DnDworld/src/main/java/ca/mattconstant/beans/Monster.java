package ca.mattconstant.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection="monster")
public class Monster {
	
	@Id
	private String id;
	
	private String name;
	
	private String url;
	
	private double cr;
	
	private String type;
	
	private String size;
	
	private int ac;
	
	private int hp;
	
	private String speed;
	
	private String align;
	
	private String legendary;
	
	private String source;
	
	private double str;
	
	private double dex; 
	
	private double con;
		
	private double wis;
	
	private double cha;

}
