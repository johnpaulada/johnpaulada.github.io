$.noConflict();
var extraversion = 0, introversion = 0, sensing = 0, intuition = 0, thinking = 0, feeling = 0, judging = 0, perceiving = 0, type = "",
scoreMap = {
	"i0": function () { if(jQuery('input[name="0"]:checked').val() == "b") sensing++; else intuition++; },
	"i1": function () { if(jQuery('input[name="1"]:checked').val() == "a") introversion++; else extraversion++; },
	"i2": function () { if(jQuery('input[name="2"]:checked').val() == "a") thinking++; else feeling++; },
	"i3": function () { if(jQuery('input[name="3"]:checked').val() == "a") judging++; else perceiving++; },
	"i4": function () { if(jQuery('input[name="4"]:checked').val() == "a") thinking++; else feeling++; },
	"i5": function () { if(jQuery('input[name="5"]:checked').val() == "a") introversion++; else extraversion++; },
	"i6": function () { if(jQuery('input[name="6"]:checked').val() == "a") judging++; else perceiving++; },
	"i7": function () { if(jQuery('input[name="7"]:checked').val() == "b") judging++; else perceiving++; },
	"i8": function () { if(jQuery('input[name="8"]:checked').val() == "a") judging++; else perceiving++; },
	"i9": function () { if(jQuery('input[name="9"]:checked').val() == "b") sensing++; else intuition++; },
	"i10": function () { if(jQuery('input[name="10"]:checked').val() == "a") introversion++; else extraversion++; },
	"i11": function () { if(jQuery('input[name="11"]:checked').val() == "a") thinking++; else feeling++; },
	"i12": function () { if(jQuery('input[name="12"]:checked').val() == "a") sensing++; else intuition++; },
	"i13": function () { if(jQuery('input[name="13"]:checked').val() == "b") thinking++; else feeling++; },
	"i14": function () { if(jQuery('input[name="14"]:checked').val() == "b") introversion++; else extraversion++; },
	"i15": function () { if(jQuery('input[name="15"]:checked').val() == "a") sensing++; else intuition++; },
	"i16": function () { if(jQuery('input[name="16"]:checked').val() == "a") sensing++; else intuition++; },
	"i17": function () { if(jQuery('input[name="17"]:checked').val() == "b") judging++; else perceiving++; },
	"i18": function () { if(jQuery('input[name="18"]:checked').val() == "b") introversion++; else extraversion++; },
	"i19": function () { if(jQuery('input[name="19"]:checked').val() == "a") thinking++; else feeling++; },
	"i20": function () { if(jQuery('input[name="20"]:checked').val() == "a") sensing++; else intuition++; },
	"i21": function () { if(jQuery('input[name="21"]:checked').val() == "a") introversion++; else extraversion++; },
	"i22": function () { if(jQuery('input[name="22"]:checked').val() == "b") judging++; else perceiving++; },
	"i23": function () { if(jQuery('input[name="23"]:checked').val() == "b") thinking++; else feeling++; },
	"i24": function () { if(jQuery('input[name="24"]:checked').val() == "a") thinking++; else feeling++; },
	"i25": function () { if(jQuery('input[name="25"]:checked').val() == "a") judging++; else perceiving++; },
	"i26": function () { if(jQuery('input[name="26"]:checked').val() == "b") introversion++; else extraversion++; },
	"i27": function () { if(jQuery('input[name="27"]:checked').val() == "b") sensing++; else intuition++; },
	"i28": function () { if(jQuery('input[name="28"]:checked').val() == "b") thinking++; else feeling++; },
	"i29": function () { if(jQuery('input[name="29"]:checked').val() == "b") sensing++; else intuition++; },
	"i30": function () { if(jQuery('input[name="30"]:checked').val() == "a") judging++; else perceiving++; },
	"i31": function () { if(jQuery('input[name="31"]:checked').val() == "b") introversion++; else extraversion++; }
},
interpretations = {
	"INFP": {
		'title': 'The Healer',
		'description': 'INFPs are imaginative idealists, guided by their own core values and beliefs. To a Healer, possibilities are paramount; the realism of the moment is only of passing concern. They see potential for a better future, and pursue truth and meaning with their own individual flair. <br> INFPs are sensitive, caring, and compassionate, and and are deeply concerned with the personal growth of themselves and others. Individualistic and nonjudgmental, INFPs believe that each person must find their own path. They enjoy spending time exploring their own ideas and values, and are gently encouraging to others to do the same. INFPs are creative and often artistic; they enjoy finding new outlets for self-expression.'
	},
	"INFJ": {
		'title': 'The Counselor',
		'description': 'INFJs are creative nurturers with a strong sense of personal integrity and a drive to help others realize their potential. Creative and dedicated, they have a talent for helping others with original solutions to their personal challenges. <br> The Counselor has a unique ability to intuit others\' emotions and motivations, and will often know how someone else is feeling before that person knows it himself. They trust their insights about others and have strong faith in their ability to read people. Although they are sensitive, they are also reserved; the INFJ is a private sort, and is selective about sharing intimate thoughts and feelings.'
	},
	"INTJ": {
		'title': 'The Mastermind',
		'description': 'INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas. They have a talent for seeing possibilities for improvement, whether at work, at home, or in themselves. <br> Often intellectual, INTJs enjoy logical reasoning and complex problem-solving. They approach life by analyzing the theory behind what they see, and are typically focused inward, on their own thoughtful study of the world around them. INTJs are drawn to logical systems and are much less comfortable with the unpredictable nature of other people and their emotions. They are typically independent and selective about their relationships, preferring to associate with people who they find intellectually stimulating.'
	},
	"INTP": {
		'title': 'The Architect',
		'description': 'INTPs are philosophical innovators, fascinated by logical analysis, systems, and design. They are preoccupied with theory, and search for the universal law behind everything they see. They want to understand the unifying themes of life, in all their complexity. <br> INTPs are detached, analytical observers who can seem oblivious to the world around them because they are so deeply absorbed in thought. They spend much of their time focused internally: exploring concepts, making connections, and seeking understanding. To the Architect, life is an ongoing inquiry into the mysteries of the universe.'
	},
	"ISFJ": {
		'title': 'The Protector',
		'description': 'ISFJs are industrious caretakers, loyal to traditions and organizations. They are practical, compassionate, and caring, and are motivated to provide for others and protect them from the perils of life.<br>ISFJs are conventional and grounded, and enjoy contributing to established structures of society. They are steady and committed workers with a deep sense of responsibility to others. They focus on fulfilling their duties, particularly when they are taking care of the needs of other people. They want others to know that they are reliable and can be trusted to do what is expected of them. They are conscientious and methodical, and persist until the job is done.'
	},
	"ISFP": {
		'title': 'The Composer',
		'description': 'ISFPs are gentle caretakers who live in the present moment and enjoy their surroundings with cheerful, low-key enthusiasm. They are flexible and spontaneous, and like to go with the flow to enjoy what life has to offer. ISFPs are quiet and unassuming, and may be hard to get to know. However, to those who know them well, the ISFP is warm and friendly, eager to share in life\'s many experiences. <br> ISFPs have a strong aesthetic sense and seek out beauty in their surroundings. They are attuned to sensory experience, and often have a natural talent for the arts. ISFPs especially excel at manipulating objects, and may wield creative tools like paintbrushes and sculptor\'s knives with great mastery.'
	},
	"ISTJ": {
		'title': 'The Inspector',
		'description': 'ISTJs are responsible organizers, driven to create and enforce order within systems and institutions. They are neat and orderly, inside and out, and tend to have a procedure for everything they do. Reliable and dutiful, ISTJs want to uphold tradition and follow regulations.<br>ISTJs are steady, productive contributors. Although they are Introverted, ISTJs are rarely isolated; typical ISTJs know just where they belong in life, and want to understand how they can participate in established organizations and systems. They concern themselves with maintaing the social order and making sure that standards are met.'
	},
	"ISTP": {
		'title': 'The Craftsman',
		'description': 'ISTPs are observant artisans with an understanding of mechanics and an interest in troubleshooting. They approach their environments with a flexible logic, looking for practical solutions to the problems at hand. They are independent and adaptable, and typically interact with the world around them in a self-directed, spontaneous manner. <br> ISTPs are attentive to details and responsive to the demands of the world around them. Because of their astute sense of their environment, they are good at moving quickly and responding to emergencies. ISTPs are reserved, but not withdrawn: the ISTP enjoys taking action, and approaches the world with a keen appreciation for the physical and sensory experiences it has to offer.'
	},
	"ENFJ": {
		'title': 'The Teacher',
		'description': 'ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their their creative potential. <br> ENFPs are typically agile and expressive communicators, using their wit, humor, and mastery of language to create engaging stories. Imaginative and original, ENFPs often have a strong artistic side. They are drawn to art because of its ability to express inventive ideas and a create a deeper understanding of human experience.'
	},
	"ENFP": {
		'title': 'The Champion',
		'description': 'ENFPs are people-centered creators with a focus on possibilities and a contagious enthusiasm for new ideas, people and activities. Energetic, warm, and passionate, ENFPs love to help other people explore their their creative potential. <br> ENFPs are typically agile and expressive communicators, using their wit, humor, and mastery of language to create engaging stories. Imaginative and original, ENFPs often have a strong artistic side. They are drawn to art because of its ability to express inventive ideas and a create a deeper understanding of human experience.'
	},
	"ENTJ": {
		'title': 'The Commander',
		'description': 'ENTJs are strategic leaders, motivated to organize change. They are quick to see inefficiency and conceptualize new solutions, and enjoy developing long-range plans to accomplish their vision. They excel at logical reasoning and are usually articulate and quick-witted. <br> ENTJs are analytical and objective, and like bringing order to the world around them. When there are flaws in a system, the ENTJ sees them, and enjoys the process of discovering and implementing a better way. ENTJs are assertive and enjoy taking charge; they see their role as that of leader and manager, organizing people and processes to achieve their goals.'
	},
	"ENTP": {
		'title': 'The Visionary',
		'description': 'ENTPs are inspired innovators, motivated to find new solutions to intellectually challenging problems. They are curious and clever, and seek to comprehend the people, systems, and principles that surround them. Open-minded and unconventional, Visionaries want to analyze, understand, and influence other people. <br> ENTPs enjoy playing with ideas and especially like to banter with others. They use their quick wit and command of language to keep the upper hand with other people, often cheerfully poking fun at their habits and eccentricities. While the ENTP enjoys challenging others, in the end they are usually happy to live and let live. They are rarely judgmental, but they may have little patience for people who can\'t keep up.'
	},
	"ESFJ": {
		'title': 'The Provider',
		'description': 'ESFJs are conscientious helpers, sensitive to the needs of others and energetically dedicated to their responsibilities. They are highly attuned to their emotional environment and attentive to both the feelings of others and the perception others have of them. ESFJs like a sense of harmony and cooperation around them, and are eager to please and provide. <br> ESFJs value loyalty and tradition, and usually make their family and friends their top priority. They are generous with their time, effort, and emotions. They often take on the concerns of others as if they were their own, and will attempt to put their significant organizational talents to use to bring order to other people\'s lives.'
	},
	"ESFP": {
		'title': 'The Performer',
		'description': 'ESFPs are vivacious entertainers who charm and engage those around them. They are spontaneous, energetic, and fun-loving, and take pleasure in the things around them: food, clothes, nature, animals, and especially people. <br> ESFPs are typically warm and talkative and have a contagious enthusiasm for life. They like to be in the middle of the action and the center of attention. They have a playful, open sense of humor, and like to draw out other people and help them have a good time.'
	},
	"ESTJ": {
		'title': 'The Supervisor',
		'description': 'ESTJs are hardworking traditionalists, eager to take charge in organizing projects and people. Orderly, rule-abiding, and conscientious, ESTJs like to get things done, and tend to go about projects in a systematic, methodical way. <br> ESTJs are the consummate organizers, and want to bring structure to their surroundings. They value predictability and prefer things to proceed in a logical order. When they see a lack of organization, the ESTJ often takes the initiative to establish processes and guidelines, so that everyone knows what\'s expected.'
	},
	"ESTP": {
		'title': 'The Dynamo',
		'description': 'ESTPs are energetic thrillseekers who are at their best when putting out fires, whether literal or metaphorical. They bring a sense of dynamic energy to their interactions with others and the world around them. They assess situations quickly and move adeptly to respond to immediate problems with practical solutions. <br> Active and playful, ESTPs are often the life of the party and have a good sense of humor. They use their keen powers of observation to assess their audience and adapt quickly to keep interactions exciting. Although they typically appear very social, they are rarely sensitive; the ESTP prefers to keep things fast-paced and silly rather than emotional or serious.'
	},
};

function checkTie(a, b, i) {
	if (a == b)
		if (i == 0)
			if(jQuery('input[name="10"]:checked').val() == "a") introversion--; else extraversion--;
		else if (i == 1)
			if(jQuery('input[name="15"]:checked').val() == "a") sensing--; else intuition--;
		else if (i == 2)
			if(jQuery('input[name="23"]:checked').val() == "b") thinking--; else feeling--;
		else if (i == 3)
			if(jQuery('input[name="22"]:checked').val() == "b") judging--; else perceiving--;
}

jQuery(document).ready(function() {
		jQuery('#doIt').click(
			function() {
				var i = 0;
				for (i = 0; i < 32; i++)
					scoreMap["i" + i]();
				checkTie(extraversion, introversion, 0);
				checkTie(sensing, intuition, 1);
				checkTie(thinking, feeling, 2);
				checkTie(judging, perceiving, 3);
				type = (extraversion>introversion?"E":"I") + (sensing>intuition?"S":"N") + (thinking>feeling?"T":"F") + (judging>perceiving?"J":"P");
				jQuery('#modal-window #type').html(type);
				jQuery('#modal-window #subtitle').html(interpretations[type].title);
				jQuery('#modal-window #desc').html(interpretations[type].description);
				jQuery('#mlink').click();
			}
		);
});