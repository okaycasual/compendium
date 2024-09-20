"use client";

import { useQuery } from '@tanstack/react-query';

async function getApiData() {
	const res = await fetch(
		"/compendium/data/monsters.json",
	);
	return res.json();
}


export default function MonsterListStatic() {
	const { data }  = useQuery({ queryKey: ["myData"], queryFn: getApiData });

	console.log(data)
	return (
		<div>
		<div className="mon-stat-block">
<div className="mon-stat-block-inner">
<div className="mon-stat-block__header">
  <div className="monster-heading">
	<h1>Displacer Beastt</h1>
	<h2>Large monstrosity, lawful evil</h2>
  </div>
</div>
<svg height="5" width="100%" className="tapered-rule">
  <polyline points="0,0 400,2.5 0,5"></polyline>
</svg>
<div className="mon-stat-block__attributes">
	<div className="mon-stat-block__attribute">
		<span className="mon-stat-block__attribute-label">Armor Class</span>
		<span className="mon-stat-block__attribute-value">
			<span className="mon-stat-block__attribute-data-value">
			  13 (natural armor)
			</span>
			
		</span>
	</div>
	<div className="mon-stat-block__attribute">
		<span className="mon-stat-block__attribute-label">Hit Points</span>
		<span className="mon-stat-block__attribute-data">
			<span className="mon-stat-block__attribute-data-value">
			  85
			</span>
			<span className="mon-stat-block__attribute-data-extra">
			  (2d8 + 2)
			</span>      
		</span>
	</div>
	<div className="mon-stat-block__attribute">
		<span className="mon-stat-block__attribute-label">Speed</span>
		<span className="mon-stat-block__attribute-data">
			<span className="mon-stat-block__attribute-data-value">
			  40 ft.
			</span>
		</span>
	</div>
</div>
<div className="mon-stat-block__stat-block">
  <svg height="5" width="100%" className="tapered-rule">
	<polyline points="0,0 400,2.5 0,5"></polyline>
  </svg>
	<div className="ability-block">
		<div className="ability-block__stat ability-block__stat--str">
			<div className="ability-block__heading">STR</div>
			<div className="ability-block__data">
				<span className="ability-block__score">18</span>
				<span className="ability-block__modifier">(+4)</span>
			</div>
		</div>
		<div className="ability-block__stat ability-block__stat--dex">
			<div className="ability-block__heading">DEX</div>
			<div className="ability-block__data">
				<span className="ability-block__score">15</span>
				<span className="ability-block__modifier">(+2)</span>
			</div>
		</div>
		<div className="ability-block__stat ability-block__stat--con">
			<div className="ability-block__heading">CON</div>
			<div className="ability-block__data">
				<span className="ability-block__score">16</span>
				<span className="ability-block__modifier">(+3)</span>
				
			</div>
		</div>
		<div className="ability-block__stat ability-block__stat--int">
			<div className="ability-block__heading">INT</div>
			<div className="ability-block__data">
				<span className="ability-block__score">6</span>
				<span className="ability-block__modifier">(-2)</span>
			</div>
		</div>
		<div className="ability-block__stat ability-block__stat--wis">
			<div className="ability-block__heading">WIS</div>
			<div className="ability-block__data">
				<span className="ability-block__score">12</span>
				<span className="ability-block__modifier">(+1)</span>
			</div>
		</div>
		<div className="ability-block__stat ability-block__stat--cha">
			<div className="ability-block__heading">CHA</div>
			<div className="ability-block__data">
				<span className="ability-block__score">8</span>
				<span className="ability-block__modifier">(-1)</span>
			</div>
		</div>
	</div>
	<svg height="5" width="100%" className="tapered-rule">
	  <polyline points="0,0 400,2.5 0,5"></polyline>
	</svg>
</div>
<div className="mon-stat-block__tidbits">
  <div className="mon-stat-block__attribute">
	  <span className="mon-stat-block__attribute-label">Senses</span>
	  <span className="mon-stat-block__attribute-data">
		darkvision 60 ft.
	  </span>
  </div>
  <div className="mon-stat-block__attribute">
	  <span className="mon-stat-block__attribute-label">Languages</span>
	  <span className="mon-stat-block__attribute-data">
		  
	  </span>
  </div>
  <div className="mon-stat-block__attribute">
	  <span className="mon-stat-block__attribute-label">Challenge</span>
	  <span className="mon-stat-block__attribute-data">
		3 (700 XP)
	  </span>
  </div>
  <div className="mon-stat-block__attribute">
	  <span className="mon-stat-block__attribute-label">Proficiency Bonus</span>
	  <span className="mon-stat-block__attribute-data">
		  +2
	  </span>
  </div>
</div>
<svg height="5" width="100%" className="tapered-rule">
  <polyline points="0,0 400,2.5 0,5"></polyline>
</svg>
<div className="mon-stat-block__description-blocks">
	<div className="mon-stat-block__description-block"> 
	  <div className="mon-stat-block__description-block-content">
		<p><strong><em>Avoidance.</em></strong> If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails .</p>

<p><strong><em>Displacement.</em></strong> The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If it is hit by an attack, this trait is disrupted until the end of its next turn. This trait is also disrupted while the displacer beast is incapacitated or has a speed of 0.</p>

<h3 id="actions">Actions</h3>

<p><strong><em>Multiattack.</em></strong> The displacer beast makes two attacks with its tentacles.</p>

<p><strong><em>Tentacle.</em></strong> Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage.</p>
		  
	  </div>
	</div>
	<div className="mon-stat-block__description-block">
	  <div className="mon-stat-block__description-block-heading">Actions</div>
	  <div className="mon-stat-block__description-block-content">
		  <p>
			<strong></strong>
			<span></span>
		  </p>
		  <p>
			<strong></strong>
			<span>
			<em>Attack:</em> <span data-dicenotation="" data-rolltype="to hit" data-rollaction="Bite"></span>
			<em>Damage:</em> <span data-dicenotation="" data-rolltype="damage" data-rollaction="Bite" data-rolldamagetype="piercing">()</span> 
			</span></p><div></div>
		  <p></p>                            
	  </div>
	</div>
</div>
</div>
		</div>
	  </div>
	);
  }
  