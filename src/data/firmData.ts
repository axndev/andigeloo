import { PracticeArea, Review, PublishedWork, ServiceArea } from '../types';

export const FIRM_DETAILS = {
  name: 'Law Office of Andi Geloo',
  legalEntity: 'Andi Geloo, PLC',
  attorneyName: 'Andaleeb "Andi" Geloo',
  tagline: 'Fairfax Criminal Defense & Traffic Attorney Fighting For Your Future',
  phone: '703.585.3323',
  phoneRaw: '7035853323',
  email: 'andigeloolaw@gmail.com',
  address: '10660 Page Ave',
  city: 'Fairfax',
  state: 'VA',
  zip: '22030',
  fullAddress: '10660 Page Ave, Fairfax, VA 22030',
  officeHours: 'Monday – Friday: 8:30 AM – 6:00 PM | 24/7 Urgent Client Response',
  googleRating: 5.0,
  googleReviewCount: 65,
  superLawyersYears: '2022 – 2025',
  almaMater: 'The George Washington University Law School (Graduated with High Honors)',
  homeCourthouse: 'Fairfax County Judicial Center / General District & Circuit Court (Steps from our office)',
  keyQuote: 'When a criminal or reckless driving charge threatens your license, career, and record, you need more than a generic defense. You need a Fairfax attorney who knows the courthouse, the prosecutors, and how to tell your story.',
  secondaryQuote: 'This firm promises honest, transparent representation. We provide straightforward case assessments, define realistic outcomes, and strive to exceed your goals, never leading you down a primrose path.',
  andiLawCitation: 'Va. Code § 8.01-247.1',
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'reckless-driving',
    slug: 'reckless-driving',
    title: 'Reckless Driving Defense',
    statuteRef: 'Va. Code § 46.2-862 & § 46.2-852',
    shortDescription: 'In Virginia, driving 20+ mph over the limit or over 85 mph is a Class 1 Criminal Misdemeanor—not a simple ticket. We fight to dismiss or reduce your charges.',
    fullDescription: 'Virginia has some of the harshest traffic and reckless driving laws in the United States. Many out-of-state drivers and local commuters are shocked to discover that driving 86 mph in a 70 mph zone, or exceeding the posted speed limit by 20 mph, is charged as a Class 1 Criminal Misdemeanor under Virginia Code § 46.2-862. A conviction carries a permanent criminal record, up to 12 months in jail, up to a $2,500 fine, and automatic 6-month driver license suspension. Andi Geloo routinely appears in the Fairfax County General District Court and across Northern Virginia, deploying calibrated speedometer calibrations, driving school mitigation, radar calibration discovery, and community service credit to protect your record and your livelihood.',
    iconName: 'Gauge',
    highlight: 'Class 1 Misdemeanor Protection in Fairfax & Northern Virginia',
    penalties: [
      'Up to 12 months in jail (mandatory minimums often sought at extreme speeds)',
      'Up to $2,500 criminal fine',
      'Driver license suspension for up to 6 months',
      '6 DMV demerit points on Virginia driver transcript (remains for 11 years)',
      'Permanent criminal record that cannot be expunged if convicted',
      'Devastating spikes in personal and commercial auto insurance rates',
      'Direct risk to security clearances for government contractors and federal employees'
    ],
    defenseStrategies: [
      'Radar, LIDAR, and laser equipment calibration record challenges',
      'Mechanical speedometer accuracy testing and judicial submission',
      'Virginia Department of Transportation (VDOT) engineering & traffic survey analysis',
      'Strategic completion of accredited Driver Improvement Programs (clinic credit)',
      'Documented community service hours prior to docket appearance',
      'Negotiation for reduction to non-criminal traffic infractions (e.g., Improper Driving Va. Code § 46.2-869 or Defective Equipment)'
    ],
    subtopics: [
      'Speed Reckless Driving (Va. Code § 46.2-862)',
      'General Reckless Driving (Va. Code § 46.2-852)',
      'Passing a Stopped School Bus (Va. Code § 46.2-859)',
      'Racing / Aggressive Driving Charges',
      'Out-of-State Driver Representation without Court Appearance (where permitted)'
    ],
    faqs: [
      {
        question: 'Can a reckless driving charge really put me in jail in Virginia?',
        answer: 'Yes. Under Virginia law, reckless driving is a Class 1 Misdemeanor. In jurisdictions like Fairfax County, judges frequently consider active jail time when speeds exceed 90 mph or 100 mph. Retaining experienced counsel immediately allows us to implement aggressive mitigating steps before you step foot in court.'
      },
      {
        question: 'Can I just prepay my Virginia reckless driving ticket online?',
        answer: 'No. Reckless driving is a criminal offense requiring an appearance in court. If you fail to appear or do not have retained legal counsel representing you, a bench warrant for your arrest or default conviction may be entered.'
      },
      {
        question: 'Can my reckless driving charge be reduced to a non-criminal infraction?',
        answer: 'Yes. With strategic preparation, attorney Andi Geloo frequently negotiates reductions to non-criminal infractions like "Improper Driving" (Va. Code § 46.2-869, 3 points), speeding infractions, or defective equipment, keeping your permanent criminal record clean.'
      }
    ]
  },
  {
    id: 'criminal-defense',
    slug: 'criminal-defense',
    title: 'Criminal Defense',
    statuteRef: 'Virginia Criminal Code (Title 18.2)',
    shortDescription: 'Aggressive, persuasive defense against misdemeanor and felony accusations in Fairfax County General District Court, Circuit Court, and federal jurisdictions.',
    fullDescription: 'When facing criminal prosecution, your liberty, employment, security clearance, and family reputation are on the line. Attorney Andi Geloo approaches every criminal matter with relentless investigative rigor and courtroom advocacy. As a high-honors graduate of The George Washington University Law School, she commands respect from local prosecutors and judges across Northern Virginia. We build personalized defense narratives that bring humanity, factual clarity, and constitutional rigor into the courtroom.',
    iconName: 'ShieldAlert',
    highlight: 'Relentless Courtroom Representation & Constitutional Advocacy',
    penalties: [
      'Active incarceration in local detention centers or state penitentiary facilities',
      'Severe monetary fines, court costs, and mandatory restitution',
      'Formal supervised probation and intrusive court monitoring',
      'Loss of civil liberties, including firearm possession and voting rights for felonies',
      'Revocation or denial of government security clearances and professional licenses'
    ],
    defenseStrategies: [
      'Fourth Amendment suppression motions for unlawful police stops and seizures',
      'Challenging the credibility, consistency, and motivations of prosecution witnesses',
      'Independent factual investigation, subpoenaing surveillance footage, and 911 dispatch audio',
      'Mitigation packages presented directly to Commonwealth’s Attorneys before trial',
      'Aggressive trial cross-examination and strategic plea negotiations'
    ],
    subtopics: [
      'Misdemeanor Charges (General District Court)',
      'Felony Offenses & Preliminary Hearings (Circuit Court)',
      'Assault & Battery / Domestic Assault (Va. Code § 18.2-57)',
      'Petit & Grand Larceny, Shoplifting, and Fraud Offenses',
      'Drug Possession & Distribution Charges',
      'Trespass, Disorderly Conduct, and Obstruction of Justice',
      'Record Expungements & Petition for Relief'
    ],
    faqs: [
      {
        question: 'What is the difference between General District Court and Circuit Court in Fairfax?',
        answer: 'In Virginia, misdemeanor criminal charges and preliminary hearings for felony charges begin in the General District Court. Misdemeanor trials are bench trials before a judge. If convicted in General District Court, you have an absolute statutory right to an appeal de novo to the Fairfax County Circuit Court for a brand new trial.'
      },
      {
        question: 'Will a criminal charge cause me to lose my federal security clearance?',
        answer: 'Any criminal arrest or conviction must typically be reported under SF-86 guidelines. Andi Geloo understands the unique security clearance sensitivities of Northern Virginia’s defense contractors, military service members, and federal civil servants.'
      }
    ]
  },
  {
    id: 'dwi-dui-defense',
    slug: 'dwi-dui-defense',
    title: 'DUI & DWI Defense',
    statuteRef: 'Va. Code § 18.2-266',
    shortDescription: 'Challenging traffic stops, field sobriety tests, and breathalyzer calibration logs to protect your driver’s license and prevent mandatory jail sentences.',
    fullDescription: 'A DUI/DWI conviction in Virginia carries mandatory minimum penalties, license suspension, ignition interlock requirements, and mandatory enrollment in the Virginia Alcohol Safety Action Program (VASAP). Attorney Andi Geloo scrutinizes every procedural step taken by law enforcement—from the initial reasonable articulable suspicion for the vehicle stop, to the administration of Standardized Field Sobriety Tests (SFSTs), to the strict certification requirements of the Department of Forensic Science for the Intox EC/IR II breath device.',
    iconName: 'Car',
    highlight: 'Forensic Breathalyzer & Field Sobriety Testing Scrutiny',
    penalties: [
      'Mandatory minimum jail time for elevated BAC levels (0.15–0.20 or 0.20+)',
      'Immediate administrative driver license suspension (7 days on first offense, 60 days on second)',
      'Mandatory 12-month driver license revocation upon first conviction',
      'Mandatory installation of Ignition Interlock Device (IID) on any vehicle operated',
      'Mandatory completion of the Virginia Alcohol Safety Action Program (VASAP)',
      'Substantial fines ranging from $250 up to $2,500 plus court fees'
    ],
    defenseStrategies: [
      'Challenging the legal justification for the initial traffic stop (lack of reasonable suspicion)',
      'Cross-examining officers on deviations from NHTSA Field Sobriety Test standards',
      'Challenging blood draw warrants, chain of custody, and forensic toxicology vials',
      'Attacking the 20-minute observation period required before breath testing',
      'Reviewing calibration certificates, dry gas ethanol standard logs, and software maintenance of Intox EC/IR II'
    ],
    subtopics: [
      'First Offense DWI / DUI Defense',
      'Second & Subsequent DUI Charges with Mandatory Jail Time',
      'High BAC Enhancements (BAC ≥ 0.15% & BAC ≥ 0.20%)',
      'Refusal of Breath or Blood Test (Va. Code § 18.2-268.3)',
      'Underage DUI (Zero Tolerance Law Va. Code § 18.2-266.1)',
      'Restricted Driver License Petitions & Interlock Exemption Motions'
    ],
    faqs: [
      {
        question: 'Can I drive while my DUI case is pending in Fairfax?',
        answer: 'Virginia imposes an automatic Administrative License Suspension (ALS) upon arrest—typically 7 days for a 1st offense. After that 7-day period expires, your full driving privileges are reinstated pending trial, unless other suspensions exist.'
      },
      {
        question: 'What if I refused the breath test at the police station?',
        answer: 'Under Virginia’s Implied Consent law (Va. Code § 18.2-268.2), refusing a chemical test after a lawful arrest can lead to an additional charge of Unreasonable Refusal (§ 18.2-268.3). A first-offense civil refusal results in a 12-month license suspension without eligibility for a restricted license.'
      }
    ]
  },
  {
    id: 'speeding-traffic-tickets',
    slug: 'speeding-traffic-tickets',
    title: 'Speeding & Traffic Violations',
    statuteRef: 'Va. Code § 46.2-870 through § 46.2-878',
    shortDescription: 'Protecting your DMV driving record, shielding commercial driver licenses (CDL), and avoiding insurance rate hikes on Northern Virginia corridors.',
    fullDescription: 'Whether pulled over on Interstate 66, I-495 Capital Beltway, the Dulles Toll Road, Route 50, or Route 28, even standard speeding citations accumulate negative DMV demerit points that can lead to driver improvement probation or suspension. For out-of-state drivers and CDL holders, traffic infractions can lead to job termination. Attorney Andi Geloo frequently resolves traffic citations with zero demerit points or full dismissals without requiring you to spend hours waiting in court.',
    iconName: 'Zap',
    highlight: 'Preserving Driving Privileges & Clean DMV Records',
    penalties: [
      '3 to 6 negative demerit points on Virginia driving transcript',
      'Escalating fines and court processing costs',
      'DMV probation or mandatory driver improvement clinic assignment',
      'Disqualification of Commercial Driver’s Licenses (CDL) for major violations',
      'Substantial rate increases from private auto insurance underwriters'
    ],
    defenseStrategies: [
      'Proof of certified speedometer accuracy calibration testing',
      'Voluntary enrollment in certified 8-hour Virginia Driver Improvement Clinics',
      'Negotiation with officers and Commonwealth attorneys prior to docket call',
      'Defective equipment pleas (§ 46.2-1003) carrying zero moving violation points',
      'Appearance on behalf of out-of-state motorists through Attorney Appearance Authorization'
    ],
    subtopics: [
      'Highway Speeding Infractions (I-66, I-495, Route 286 Fairfax County Parkway)',
      'Following Too Closely & Failure to Maintain Lane Control',
      'Failure to Obey Highway Signs or Traffic Signals (§ 46.2-830)',
      'Commercial Driver’s License (CDL) Citation Defense',
      'Move-Over Law Violations (§ 46.2-861.1)'
    ],
    faqs: [
      {
        question: 'Do I have to appear in person for a speeding ticket in Fairfax?',
        answer: 'For minor traffic infractions, retained legal counsel can often appear in court on your behalf with a written power of attorney or authorization, saving you lost wages and hours in the courthouse.'
      },
      {
        question: 'How do DMV demerit points work in Virginia?',
        answer: 'Virginia assigns 3, 4, or 6 demerit points depending on the severity of the moving violation. Accumulating 12 points in 12 months triggers mandatory driver clinic or DMV probation.'
      }
    ]
  },
  {
    id: 'driving-on-suspended',
    slug: 'driving-on-suspended',
    title: 'Driving on Suspended License',
    statuteRef: 'Va. Code § 46.2-301 & § 46.2-300',
    shortDescription: 'Virginia treats driving while suspended as a criminal misdemeanor with mandatory additional suspension. We help resolve the underlying root cause and restore your license.',
    fullDescription: 'Driving on a suspended or revoked license under Virginia Code § 46.2-301 is a Class 1 Misdemeanor. Even worse, a third conviction within a 10-year period carries a mandatory minimum 10-day jail sentence. Many drivers are caught unaware due to unpaid court fines, out-of-state lapses, or administrative DMV notices. Attorney Andi Geloo works closely with clients to cure underlying DMV compliance issues before court, enabling us to seek complete dismissals or reductions.',
    iconName: 'KeyRound',
    highlight: 'Strategic DMV Compliance & License Reinstatement',
    penalties: [
      'Up to 12 months in jail',
      'Mandatory minimum 10-day jail sentence for a 3rd offense within 10 years',
      'Additional mandatory license suspension equal to the original suspension duration',
      'Criminal conviction on permanent Virginia state record',
      'Vehicle impoundment fees and administrative DMV reinstatement penalties'
    ],
    defenseStrategies: [
      'Attacking the Commonwealth’s burden of proof regarding formal legal notice of suspension',
      'Direct coordination with DMV to rectify outstanding fees or testing requirements',
      'Obtaining official compliance documentation prior to court appearance',
      'Negotiating reduction to driving without a valid license (§ 46.2-300) or dismissal'
    ],
    subtopics: [
      'Driving on Suspended for DUI/DWI Conviction (§ 18.2-272)',
      'Driving While Suspended for Unpaid Fines or Child Support',
      'Habitual Offender Reinstatement Petitions',
      'Restricted License Violations & Compliance Filings'
    ],
    faqs: [
      {
        question: 'Can I be convicted if I never received notice that my license was suspended?',
        answer: 'Virginia law requires the Commonwealth to prove that you received actual or legal constructive notice of your suspension. If DMV mailed notice to an incorrect address without statutory compliance, we can challenge the charges on lack of notice.'
      }
    ]
  },
  {
    id: 'personal-injury-accidents',
    slug: 'personal-injury-accidents',
    title: 'Personal Injury & Auto Accidents',
    statuteRef: 'Virginia Tort Law & Pure Contributory Negligence',
    shortDescription: 'Aggressive representation against insurance carriers for car crashes, truck collisions, and pedestrian injuries across Northern Virginia.',
    fullDescription: 'Virginia is one of only a handful of jurisdictions adhering to the harsh doctrine of "Pure Contributory Negligence." Under Virginia law, if the injured party is found even 1% at fault for an accident, they are completely barred from recovering compensation. This is why having a battle-tested trial lawyer like Andi Geloo is essential from day one. We investigate liability, secure accident reconstruction evidence, counter insurer tactics, and demand full compensation for medical expenses, lost earnings, and pain and suffering.',
    iconName: 'Ambulance',
    highlight: 'Overcoming Virginia’s Strict Contributory Negligence Rule',
    penalties: [
      'Severe out-of-pocket medical bills and rehabilitation expenses',
      'Lost wages and diminished future earning capacity',
      'Physical pain, permanent scarring, disability, and loss of life enjoyment',
      'Property damage and vehicle replacement disputes with insurance adjusters'
    ],
    defenseStrategies: [
      'Rapid scene investigation, dashcam recovery, and independent witness statements',
      'Insulation against contributory negligence traps laid by insurance claims adjusters',
      'Comprehensive medical documentation and expert physician consultations',
      'Tenacious settlement negotiation backed by proven readiness to try the case in Circuit Court'
    ],
    subtopics: [
      'Car, SUV, and Highway Collisions (I-66, I-495, Route 50)',
      'Commercial Truck & Tractor-Trailer Accidents',
      'Motorcycle & Pedestrian Injury Claims',
      'Rear-End Collisions & Intersection T-Bone Crashes',
      'Uninsured & Underinsured Motorist (UM/UIM) Coverage Claims'
    ],
    faqs: [
      {
        question: 'What is Virginia’s contributory negligence rule and why is it dangerous?',
        answer: 'If an insurance company convinces a jury that you contributed even 1% to the crash (e.g., traveling 2 mph over the limit or momentarily looking away), you recover $0. We rigorously establish 100% defendant liability to insulate your claim.'
      }
    ]
  },
  {
    id: 'civil-defamation-andis-law',
    slug: 'civil-defamation-andis-law',
    title: 'Online Defamation & Civil Rights',
    statuteRef: 'Andi’s Law – Va. Code § 8.01-247.1',
    shortDescription: 'Pioneering legal representation by the attorney who drafted "Andi’s Law" to protect individuals from online harassment, cyberbullies, and digital defamation.',
    fullDescription: 'When internet bullies and anonymous predators launched vicious defamatory attacks against Andaleeb "Andi" Geloo, existing Virginia statutes shielded anonymous online perpetrators. Rather than back down, Andi Geloo took the fight to the Virginia General Assembly and changed state law. As the architect and namesake of "Andi’s Law" (Virginia Code § 8.01-247.1), she created a new statutory right of action enabling victims to unmask anonymous online harassers and recover damages. She brings that same fierce courage and legislative intellect to every client facing reputation harm or civil disputes.',
    iconName: 'FileCheck',
    highlight: 'Written & Championed by Attorney Andi Geloo Herself',
    penalties: [
      'Devastating damage to professional standing, executive careers, and business revenues',
      'Psychological distress, anxiety, and online stalking',
      'Search engine smear campaigns that impair personal and commercial relationships'
    ],
    defenseStrategies: [
      'Pre-litigation forensic discovery to subpoena internet service providers and unmask anonymous posters',
      'Statutory claims under Va. Code § 8.01-247.1 for cyberbullying and online defamation',
      'Emergency preliminary injunctions and court orders compelling content removal',
      'Strategic settlement demands and damages recovery for commercial loss and emotional distress'
    ],
    subtopics: [
      'Statutory Actions under Andi’s Law (Va. Code § 8.01-247.1)',
      'Defamation Per Se & Slander / Libel Litigation',
      'Anonymous Online Harassment & Cyberbullying Relief',
      'Digital Reputation Defense & Takedown Demands',
      'Civil Rights & First Amendment Nuance'
    ],
    faqs: [
      {
        question: 'What is Andi’s Law (Virginia Code § 8.01-247.1)?',
        answer: 'Andi’s Law is Virginia statute drafted and advocated for by attorney Andi Geloo. It provides a direct civil cause of action against individuals who use computer networks to publish defamatory, malicious, or harassing content anonymously, empowering courts to issue subpoenas and hold bullies accountable.'
      }
    ]
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    author: 'Rebecca Grant',
    caseType: 'Criminal Defense',
    rating: 5,
    source: 'Google',
    date: 'Verified Client Review',
    content: 'Best Lawyer! Andi was communicative, fiercely protective of my rights, and walked me through every phase of my case in Fairfax. I could not have asked for better representation.',
    courtLocation: 'Fairfax County General District Court',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Muhammad Daniyal',
    caseType: 'Reckless Driving',
    rating: 5,
    source: 'Google',
    date: 'Verified Client Review',
    content: 'I had the pleasure of working with Andi Geloo recently for my reckless ticket in Prince William County 25/51. From our first consultation, she laid out a precise plan of action, told me what to complete in advance, and got my charge completely reduced. She treats your case as if it were her own!',
    courtLocation: 'Prince William County Courthouse (Manassas)',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'David Goodspeed',
    caseType: 'Reckless Driving',
    rating: 5,
    source: 'Google',
    date: 'Verified Client Review',
    content: 'Andi was an absolutely *excellent* lawyer to have in my corner—she truly went above and beyond to assist. Facing a criminal misdemeanor for speed in Virginia was terrifying for my security clearance. Andi knows the Fairfax prosecutors and achieved a clean outcome that saved my career.',
    courtLocation: 'Fairfax County Judicial Center',
    verified: true
  },
  {
    id: 'rev-4',
    author: 'Mark T.',
    caseType: 'Traffic Offense',
    rating: 5,
    source: 'Birdeye',
    date: 'Verified Client Review',
    content: 'Phenomenal attorney who commands respect the moment she steps into the courtroom. She was completely honest with me, never promised what she couldn’t deliver, and ended up getting a better result than I dared hope for.',
    courtLocation: 'Fairfax County Courthouse',
    verified: true
  },
  {
    id: 'rev-5',
    author: 'Elena S.',
    caseType: 'DUI / DWI',
    rating: 5,
    source: 'Google',
    date: 'Verified Client Review',
    content: 'Andi Geloo is brilliant, compassionate, and tenacious. She challenged the breathalyzer administration and the basis for the initial stop. Her knowledge of Virginia procedural rules is second to none.',
    courtLocation: 'Loudoun County General District Court',
    verified: true
  },
  {
    id: 'rev-6',
    author: 'Jason K.',
    caseType: 'Reckless Driving',
    rating: 5,
    source: 'Google',
    date: 'Verified Client Review',
    content: 'Out of state driver caught on I-66. Thought my life was ruined with a criminal record in Virginia. Andi handled everything smoothly without me having to take off multiple days from work. Charge reduced to a non-criminal infraction. 10/10 recommendation!',
    courtLocation: 'Fairfax County General District Court',
    verified: true
  }
];

export const PUBLISHED_WORKS: PublishedWork[] = [
  {
    id: 'pub-1',
    title: 'Why Virginia’s Carrico course needs a new name',
    publication: 'Richmond Times-Dispatch',
    date: 'Op-Ed Legal Commentary',
    type: 'Op-Ed',
    description: 'In this op-ed I write why Virginia’s mandatory professionalism course shouldn’t be named after Carrico, the Justice who banished Mildred and Richard from living as married in Virginia because of the color of their skin, and why the true legacy is Mildred and Richard Loving – not him.',
    linkText: 'Read Commentary'
  },
  {
    id: 'pub-2',
    title: 'No Commending Wayward Judges',
    publication: 'Virginia Lawyers Weekly',
    date: 'Op-Ed Analysis',
    type: 'Op-Ed',
    description: 'In this op-ed for Virginia Lawyers Weekly, I expose the longstanding abuse of power by three judges that was unfortunately tolerated by the chief judge at the time, reflecting a pervasive issue within the system.',
    linkText: 'Read Analysis'
  },
  {
    id: 'pub-3',
    title: 'Time to get wayward judges off the bench',
    publication: 'Fairfax Times',
    date: 'Investigative Editorial',
    type: 'Op-Ed',
    description: 'In this op-ed for Fairfax Times and Virginia Lawyer’s Weekly, I expose the longstanding abuse of power tolerated in justice systems for far too long, advocating for structural judicial accountability.',
    linkText: 'Read Article'
  },
  {
    id: 'pub-4',
    title: 'Author of Andi’s Law – Va. Code § 8.01-247.1',
    publication: 'Virginia General Assembly',
    date: 'Statutory Reform',
    type: 'Statute',
    citation: 'Va. Code Ann. § 8.01-247.1',
    description: 'When existing statutory remedies fell short in holding anonymous cyber-harassers accountable, Andi Geloo personally drafted and lobbied for legislation that changed the Commonwealth of Virginia’s legal code to safeguard victims.',
    linkText: 'View Virginia Code'
  },
  {
    id: 'pub-5',
    title: 'When Advocacy Met Empathy in Courtroom 1',
    publication: 'Virginia Lawyer’s Magazine',
    date: 'February 2026',
    type: 'Legal Journal',
    description: 'A Case Study in the Power of Telling a Narrative and a Prosecutor’s Willingness to Listen. An examination of how personal client narratives transform judicial outcomes in high-stakes criminal proceedings.',
    linkText: 'Read Case Study'
  },
  {
    id: 'pub-6',
    title: 'Andi Geloo changed the law.',
    publication: 'The New York Times project: Women in the World',
    date: 'National Media Feature',
    type: 'Magazine Feature',
    description: 'Featured national profile examining how attorney Andaleeb "Andi" Geloo overcame online bullies by going straight to lawmakers and passing landmark legislation in Virginia.',
    linkText: 'View Feature'
  },
  {
    id: 'pub-7',
    title: 'Top Lawyers: Andaleeb "Andi" Geloo On The 5 Things You Need To Become A Top Lawyer',
    publication: 'Authority Magazine (Interview by Eric Pines)',
    date: 'Leadership Feature',
    type: 'Magazine Feature',
    description: 'In-depth interview covering courtroom strategy, building authentic client trust, ethics in criminal defense, and the discipline required to stand up against systemic pressures.',
    linkText: 'Read Interview'
  },
  {
    id: 'pub-8',
    title: 'Live Legal Commentary on High-Profile Trials',
    publication: 'ABC News Channel 8 (DC News Live) & Let’s Talk Live',
    date: 'Television Broadcasts',
    type: 'Television',
    description: 'Invited television legal analyst providing real-time analysis of criminal procedure, jury selection, and constitutional rights in Northern Virginia and Washington, D.C.',
    linkText: 'Watch Broadcast Segment'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'fairfax-county',
    name: 'Fairfax County & City of Fairfax',
    courthouse: 'Fairfax County Judicial Center',
    address: '4110 Chain Bridge Rd, Fairfax, VA 22030',
    description: 'Our primary home court. Located at 10660 Page Avenue, our office sits less than 0.3 miles from the Fairfax County Courthouse doors. We appear weekly before Fairfax General District Court judges and prosecutors.',
    keyCourts: ['Fairfax General District Court', 'Fairfax Circuit Court', 'Fairfax Juvenile & Domestic Relations Court', 'City of Fairfax Court'],
    distanceFromOffice: '0.3 miles (Walking distance)'
  },
  {
    id: 'prince-william',
    name: 'Prince William County & Manassas',
    courthouse: 'Prince William County Judicial Center',
    address: '9311 Lee Ave, Manassas, VA 20110',
    description: 'Defending motorists and individuals facing reckless driving, DUI, and misdemeanor charges along the I-66 corridor, Route 28, and Route 234.',
    keyCourts: ['Prince William General District Court', 'Prince William Circuit Court'],
    distanceFromOffice: 'Approx. 18 miles'
  },
  {
    id: 'loudoun-county',
    name: 'Loudoun County & Leesburg',
    courthouse: 'Loudoun County Courthouse',
    address: '18 E Market St, Leesburg, VA 20176',
    description: 'Handling criminal citations, high-speed reckless driving on Route 7 and Route 28, and traffic charges in historic Leesburg and Sterling.',
    keyCourts: ['Loudoun General District Court', 'Loudoun Circuit Court'],
    distanceFromOffice: 'Approx. 24 miles'
  },
  {
    id: 'arlington-county',
    name: 'Arlington County & City of Falls Church',
    courthouse: 'Arlington County Courthouse',
    address: '1425 N Courthouse Rd, Arlington, VA 22201',
    description: 'Representing federal employees, Pentagon contractors, and motorists stopped on I-395, Route 50, and the George Washington Memorial Parkway.',
    keyCourts: ['Arlington General District Court', 'Arlington Circuit Court', 'Falls Church General District Court'],
    distanceFromOffice: 'Approx. 14 miles'
  },
  {
    id: 'alexandria-city',
    name: 'City of Alexandria',
    courthouse: 'Alexandria General District Court',
    address: '520 King St, Alexandria, VA 22314',
    description: 'Representing clients in Old Town Alexandria and federal U.S. District Court for the Eastern District of Virginia (Albert V. Bryan Courthouse).',
    keyCourts: ['Alexandria General District Court', 'Alexandria Circuit Court', 'U.S. District Court EDVA'],
    distanceFromOffice: 'Approx. 16 miles'
  }
];

export const GENERAL_FAQS = [
  {
    category: 'Reckless Driving & Traffic',
    question: 'Why is reckless driving in Virginia taken so much more seriously than in other states?',
    answer: 'Virginia is one of the strictest jurisdictions in the nation. Under Va. Code § 46.2-862, driving over 85 mph anywhere in Virginia, or 20 mph over the speed limit, is defined by statute as a Class 1 Criminal Misdemeanor—not a civil infraction. If convicted, it stays on your permanent adult criminal record for life and cannot be expunged. This is why you need an experienced local attorney who knows how to structure mitigation and negotiate with local prosecutors.'
  },
  {
    category: 'Reckless Driving & Traffic',
    question: 'What is the speed threshold where jail time becomes a serious possibility in Fairfax?',
    answer: 'While technically any Class 1 Misdemeanor can carry up to 12 months in jail, Fairfax County judges historically begin considering active weekend or straight jail time at speeds of 90 mph or higher, and nearly always at 100+ mph. Early intervention with attorney Andi Geloo is vital to implement driving school, community service, and calibration checks before your initial appearance.'
  },
  {
    category: 'Courthouse & Representation',
    question: 'Do I have to appear in person at the Fairfax County Courthouse?',
    answer: 'For minor traffic infractions or cases where your speed is under high risk thresholds, attorney Andi Geloo can often waive your appearance with a signed Attorney Authorization form. For criminal misdemeanor charges or high speeds (e.g. 90+ mph), your personal presence is generally required by Virginia law, but Andi stands right beside you every second.'
  },
  {
    category: 'Criminal Defense',
    question: 'What should I do if a police officer or detective contacts me asking for "my side of the story"?',
    answer: 'Never give a statement to law enforcement before consulting an attorney. Politely state: "I am exercising my right to remain silent and I request to speak with my attorney, Andi Geloo." Anything you say can and will be used by prosecutors against you, even if you believe your explanation demonstrates your innocence.'
  },
  {
    category: 'DUI & DWI',
    question: 'Will I lose my driver’s license immediately after being arrested for a DUI in Virginia?',
    answer: 'Upon arrest for a first-offense DUI where breath test refusal or a BAC of 0.08%+ is alleged, Virginia imposes an immediate 7-day administrative license suspension (ALS). After that 7-day period expires, you can regain your physical license until your court trial date. If convicted at trial, a 12-month suspension is mandated, but we can petition for restricted driving privileges with an ignition interlock device.'
  },
  {
    category: 'Consultation & Fees',
    question: 'How does Andi Geloo handle consultations and legal fees?',
    answer: 'We provide an initial confidential case evaluation where we review the facts of your citation or warrant, explain the specific judge and prosecutor tendencies in your assigned court, and provide a clear, transparent flat-fee quote. No surprise hourly billings or hidden administrative fees.'
  }
];
