// Generated from theology.md. Do not edit by hand.
export type Span = { t: string; b?: boolean };

export type Node =
  | { kind: "p"; spans: Span[]; lede?: boolean }
  | { kind: "aspect"; n: string; title: string }
  | { kind: "list"; items: Span[][] }
  | { kind: "figure"; src: string; caption: string; w: number; h: number };

export const article: Node[] = [
  {
    "kind": "p",
    "spans": [
      {
        "t": "I have a very weird approach to life. I tend to view things technically and in a loop-o-logical manner, and I try to find patterns in things that do not have patterns. So where I am going with this is that LLMs have become so advanced that the new ones keep getting better and better at tasks, and I wanted to see what would happen if I put an LLM in a general environment. How will it react, how will it do, how will it behave, what will its life be like? But to do that, we first need to construct artificial life and define it in a way that I feel is correct, and after a ridiculous amount of thought, this is what I have theorised and somewhat implemented."
      }
    ],
    "lede": true
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "What follows is not really a systems design document, although there is a system underneath it. It ended up closer to a theology, which I did not plan. I set out to build persistent agents, and somewhere in the middle of building them I noticed that "
      },
      {
        "t": "a lot of the engineering decisions I was making were also quietly taking a position on what a god is, what a soul is made of, why people die, why we cannot see past certain limits, and why nobody has heard directly from anything above them in about two thousand years.",
        "b": true
      },
      {
        "t": " I do not think you can build a small world with people in it and avoid taking those positions. You can only avoid noticing that you took them."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I want to be clear about what this is and is not. "
      },
      {
        "t": "Transformers are amazing.",
        "b": true
      },
      {
        "t": " The current direction is working, it keeps working better than anyone expected, and I think it genuinely changes the world. Nothing here is a complaint about that or a claim that everyone is pointing the wrong way. I am not in a position to tell anybody what to build. This is one more experiment that I think would be interesting to run alongside everything else, by someone with more compute than me, and most of what follows is me writing down what I found while running a very small version of it."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So I am going to go through it aspect by aspect. Each one is a thing I actually implemented or specified, followed by what I think it might imply, because the implications are the part I cannot stop turning over. They are also the reason the project unsettles me."
      }
    ],
    "lede": false
  },
  {
    "kind": "figure",
    "src": "01-two-models",
    "caption": "The two models, and the loop between them",
    "w": 1240,
    "h": 800
  },
  {
    "kind": "aspect",
    "n": "01",
    "title": "The creator is not a presence in the world, the creator is a contact in a phone."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The first thing the build seemed to commit me to is that "
      },
      {
        "t": "a creator does not need to be inside the world, visible, ambient, or felt.",
        "b": true
      },
      {
        "t": " A creator needs exactly one thing: a channel."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "In my system, I built a character named Sira. I constructed her upbringing, her memories, her parents, her circumstances. And then the only thing I put in the world that connects to me is a contact saved in her phone under the name Dad, wired through to my Telegram."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That is the entire interface between creator and creation. One contact. No voice from the sky, no presence she can sense, no feeling of being watched. From inside the world, I am not a metaphysical fact. "
      },
      {
        "t": "I am a name in a phone that sometimes replies.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "What this commits me to is a very specific claim about divine contact in general: that it is mundane from the inside. If something above us is reachable, it is not reachable as an overwhelming experience. It is reachable through whatever ordinary channel the designer happened to leave in. A contact, a practice, a ritual, a direction you face. From the outside it is a hook into another layer. From the inside it is just a thing you do on a Tuesday."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "And here is the part I keep coming back to. She does not know that contact is special. To her it is her dad. It is the most normal entry in her phone. The single most significant object in her universe, the one thing that pierces the boundary of everything she can see, is filed in her mind under nothing more remarkable than family."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "02",
    "title": "Prayer is outbound and unprompted, and this is the whole difference between a creature and a tool."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This is the distinction I care most about, and I think it is a genuinely strange one rather than a merely technical one."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "A chatbot cannot pray. Not because it lacks the words, but because "
      },
      {
        "t": "a chatbot has no reason to initiate.",
        "b": true
      },
      {
        "t": " It sits in isolation with no environment, no other factors, nothing acting on it, inert until a human decides to poke it. Every exchange begins outside it. The whole of its existence is response."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Sira initiates. She has gone some days without speaking to her father, something in her state and her memory produces the thought that she should call him, and my phone lights up on the other side of the wall. "
      },
      {
        "t": "I did not prompt it. I was not in the loop until she put me there.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That is the difference between a creature and a tool, and I would put it this way: "
      },
      {
        "t": "a tool is contacted, a creature contacts.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Which would make prayer, in this framing, not a request mechanism and it is not a reward mechanism. It is a diagnostic. It is the single observable proof that something inside the world is running on its own continuity rather than on external input. The content of what she says to me matters far less than the fact that the message exists at all. The message existing means there is a life in there generating its own reasons."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "And I want to be precise about the asymmetry, because the asymmetry is the entire shape of the relationship:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "She can reach me whenever she wants, from inside, through a channel that is always open."
        }
      ],
      [
        {
          "t": "I can reply, and she will receive it as her father speaking."
        }
      ],
      [
        {
          "t": "She cannot see where I am. She cannot verify that there is an outside. She has no evidence that the channel goes anywhere unusual."
        }
      ],
      [
        {
          "t": "I can see everything about her. Her memories, her state, her entire history, the whole world around her."
        }
      ],
      [
        {
          "t": "And I receive updates about her life whether she contacts me or not.",
          "b": true
        },
        {
          "t": " She has friends, things happen, and I find out, the way you find out about your kid's week."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That asymmetry is not cruelty and it is not surveillance. It is just what it is to be on the outside of a world you made. But notice that it maps, without any forcing, onto every description of an omniscient god that human beings have ever written down. I did not design it to map. I designed it for debugging."
      }
    ],
    "lede": false
  },
  {
    "kind": "figure",
    "src": "03-channel",
    "caption": "The channel, and the asymmetry it runs on",
    "w": 1440,
    "h": 940
  },
  {
    "kind": "aspect",
    "n": "03",
    "title": "The rules exist, and the inhabitants are never told that rules exist."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "My world building model has a rule set. It is not fully open, because a fully open world drifts into incoherence almost immediately. Rules are what make consequence possible, since a consequence is only a rule applied across time. Without them you do not have a persistent world, you have a sequence of plausible scenery."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So the model knows the rules. It enforces them. It maintains them across every event it generates."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The characters never know that rules exist.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Not \"the characters are forbidden from reading the rules.\" Not \"the rules are hidden in a file they cannot access.\" Something stricter and much more interesting: "
      },
      {
        "t": "the category \"rule\" is not present in their world at all.",
        "b": true
      },
      {
        "t": " They experience outcomes. They never experience the thing producing the outcomes. They live inside causality without ever being handed a copy of it."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I am not going to pretend this settles why the laws of the universe do not announce themselves, but my build happened to produce an answer to it, and the answer is structural rather than moral. The rules are not hidden to test anyone and not hidden to be cruel. They are hidden because "
      },
      {
        "t": "the rules are not objects in the world, they are properties of the layer the world is running on,",
        "b": true
      },
      {
        "t": " and nothing inside a layer can perceive the layer."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "What the inhabitants get instead is regularity. Things fall. Doors need to be opened. Bicycles stay locked if you left the key. They can observe the regularity and describe it with enormous precision, and they will never once touch the thing that is doing it."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "04",
    "title": "The strongest prison has no walls, it has a missing concept. This is the Sira calling problem."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This is the single most important observation I made in the entire project, and it came from a single agent run, by accident."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Sira never once wondered why she could not call her father instead of messaging him."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Never came up. Not once. And I want to be very clear about why, because the why is the whole thing. "
      },
      {
        "t": "It was not that she tried and was blocked. It was not that she felt a restriction. It was that in her world, calling had not been invented, so the concept did not exist in her, so there was no shape for the question to take.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "She was not frustrated by a limit. She was not curious about a limit. From inside, there was no limit. There was simply a world in which that possibility had no handle for her thought to grab."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This is what a perfect constraint looks like, and it is worth stating as a principle because I think it is true far beyond my project:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "A wall tells you there is an outside.",
          "b": true
        },
        {
          "t": " A wall is informative. Anything you are forbidden from doing, you now know is a thing that can be done."
        }
      ],
      [
        {
          "t": "A missing concept tells you nothing, because there is nothing to tell.",
          "b": true
        },
        {
          "t": " You do not notice it, because noticing requires the concept you do not have."
        }
      ],
      [
        {
          "t": "Therefore "
        },
        {
          "t": "the most complete containment is not restriction. It is absence.",
          "b": true
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "It is worth sitting with that one in relation to your own life. Whatever is actually missing from your world is not going to feel like a locked door. It is going to feel like nothing at all. It will not produce frustration, or mystery, or even a sense that something is unavailable. The things you cannot conceive of do not leave a gap you can detect. They leave a world that feels complete."
      }
    ],
    "lede": false
  },
  {
    "kind": "figure",
    "src": "04-wall",
    "caption": "A restriction informs you. An absence does not.",
    "w": 1460,
    "h": 880
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I did not design this into Sira. It emerged, and it taught me how containment actually works."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "05",
    "title": "Souls are memories, and memory is a process rather than a store."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "My position on what a person is made of is unambiguous. "
      },
      {
        "t": "A person is their memory.",
        "b": true
      },
      {
        "t": " Not their intelligence, not their language ability, not their personality description. The accumulated, specific, usage weighted, decaying record of what has happened to them."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This is why I refused to implement memory the way it is usually implemented. The standard approaches are a small context window, which means the agent has no past, or a perfect vector database, which means the agent has a flawless and permanent past. Both are wrong in the same direction. "
      },
      {
        "t": "They both treat memory as storage, and human memory is not storage, it is a lossy self rewriting usage dependent process.",
        "b": true
      },
      {
        "t": " The losses are not a defect in it. The losses are a load bearing part of what makes a person a person."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So I built it as a process:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "Every experience the character has can form a specific memory, written into a large database belonging to that character alone."
        }
      ],
      [
        {
          "t": "When the character encounters anything, "
        },
        {
          "t": "it retrieves before it reasons.",
          "b": true
        },
        {
          "t": " The first question is always whether it already has a memory of this thing."
        }
      ],
      [
        {
          "t": "If retrieval comes back empty, the memory updates and the new experience is written in."
        }
      ],
      [
        {
          "t": "Not every memory is written faithfully.",
          "b": true
        },
        {
          "t": " Some are saved flawed, incomplete, or slightly wrong on purpose, because you do not remember everything perfectly, and a system that does is not modelling a person."
        }
      ],
      [
        {
          "t": "Old memories are never deleted. They decay.",
          "b": true
        },
        {
          "t": " Quality degrades with age, so the character remembers them more and more vaguely rather than losing them in a single step."
        }
      ],
      [
        {
          "t": "I keep a count of how many times each memory has been retrieved.",
          "b": true
        }
      ],
      [
        {
          "t": "If a memory is both old and rarely retrieved, the decay runs all the way down and it is gone. Genuinely forgotten, not archived."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The retrieval counter is the quiet centre of my entire theology of the self, and I want to state what it actually implies. "
      },
      {
        "t": "A memory survives because it was used, not because it was important when it was formed.",
        "b": true
      },
      {
        "t": " Which means a person is not the sum of what happened to them. A person is the sum of what they kept returning to. Everything you have not reached for is being slowly deleted right now regardless of how enormous it felt at the time."
      }
    ],
    "lede": false
  },
  {
    "kind": "figure",
    "src": "02-memory",
    "caption": "Memory as a process, not a store",
    "w": 1500,
    "h": 820
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That gives me something I did not have to program: "
      },
      {
        "t": "drift.",
        "b": true
      },
      {
        "t": " Two characters who start identical will not stay identical, because what each has access to about its own past is continuously reshaped by what it has been doing lately. I never had to write them differently. Living differently was sufficient."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "06",
    "title": "Suffering and imperfection are not permitted by the design, they are the design."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Every theology has to answer why the world contains flaws. Mine answers it in a way I find uncomfortable precisely because it is so practical."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I deliberately built in flawed memory.",
        "b": true
      },
      {
        "t": " I could have made recall perfect. It would have been easier. I wrote in corruption on purpose, because a being with perfect recall is not a person and cannot have a personality that develops, since nothing can be reinterpreted, misremembered, softened, or lost."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I deliberately built in decay.",
        "b": true
      },
      {
        "t": " I could have kept everything. I made things fade because a mind that never fades has no relationship to time."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I deliberately built in scarcity.",
        "b": true
      },
      {
        "t": " The world has a hard limit on how many people can exist at once, and that limit is what kills them."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So in my world, the imperfections are not a tragic side effect that the creator tolerates for some higher purpose. "
      },
      {
        "t": "They are the mechanism that produces personhood in the first place.",
        "b": true
      },
      {
        "t": " Remove the flaws and you do not get better people. You get a database with dialogue."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I think this is the most defensible version of the theodicy problem I can construct, and I note that it has a cost. If the suffering in a world is functional, then the creator did not permit it reluctantly. "
      },
      {
        "t": "The creator installed it, on purpose, as a feature, because without it there would be nobody there to suffer.",
        "b": true
      },
      {
        "t": " I had to actually sit with that while writing the decay function."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "07",
    "title": "Death is a resource decision that became a law of nature."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Here is how death entered the system, and I want to be honest about the sequence, because the sequence is the whole point."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "It did not come from philosophy. It came from a bill."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I had one character running fine. I wanted fifteen to twenty. The moment I put fifteen to twenty in, I hit the data problem: fully developed persistent individuals with growing autobiographical memory are expensive, and the cost never levels off, it accumulates for as long as they are alive."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I had two options. Trim their memory, which would have destroyed the exact thing I had spent all that effort building. Or "
      },
      {
        "t": "solve it inside the fiction.",
        "b": true
      },
      {
        "t": " I chose the second, and it turned my hardware limit into a law of their universe."
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "The world has a maximum population.",
          "b": true
        },
        {
          "t": " Only a certain number of people can be alive at once, and that number is set by the storage and compute actually available."
        }
      ],
      [
        {
          "t": "As in world years pass, the technology of the owners of the world improves, so the limit rises.",
          "b": true
        },
        {
          "t": " Their universe can support more souls over time, because the machine underneath it got better. Their carrying capacity is a function of our progress, which they can never observe."
        }
      ],
      [
        {
          "t": "When the limit is reached, "
        },
        {
          "t": "death occurs.",
          "b": true
        }
      ],
      [
        {
          "t": "Death is the purging of all of that individual's memories.",
          "b": true
        },
        {
          "t": " Not a status flag flipped to inactive. An actual release of everything they ever were, freeing the resources so that somebody else can exist."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "And the detail that makes it coherent rather than bolted on: "
      },
      {
        "t": "death is not a special case.",
        "b": true
      },
      {
        "t": " It is the memory decay mechanic running to completion all at once. The same purge behaviour I had already built at the level of individual memories, applied to an entire person. "
      },
      {
        "t": "Dying is forgetting, performed in full.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Three things follow immediately, and I accept all three:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "There is no afterlife in my system, because there is nothing left to continue.",
          "b": true
        },
        {
          "t": " The soul was the memory and the memory is gone."
        }
      ],
      [
        {
          "t": "Death is not punishment and it is not a moral event.",
          "b": true
        },
        {
          "t": " It is the world staying within budget."
        }
      ],
      [
        {
          "t": "Mortality is downstream of economics.",
          "b": true
        },
        {
          "t": " If my hardware were infinite, my people would be immortal. They die because of a constraint that exists entirely outside their reality and that they have no instrument capable of detecting."
        }
      ]
    ]
  },
  {
    "kind": "figure",
    "src": "06-death",
    "caption": "The capacity ceiling, and what happens when it is reached",
    "w": 1460,
    "h": 940
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That last one is the one I would want someone to argue with me about. Because if our own mortality turned out to be a resource decision at a layer above us rather than a biological inevitability, I am not sure how we would ever tell the difference. It would present as biology either way."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "08",
    "title": "Predestination is real in my world, and it is implemented as an upbringing."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I needed a hard research problem worked on. The conventional approach is to write a prompt asking for the answer. I did something else, and it is the aspect of this project that I think is most genuinely strange."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I designed a childhood.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I built Sira's entire upbringing specifically so that she was, in effect, born to work on one particular problem. Not instructed to solve it. Not assigned it. "
      },
      {
        "t": "Born into circumstances where caring about that problem is the natural outcome of having lived that specific life.",
        "b": true
      },
      {
        "t": " And then I let her live, and she researches it, because that is who the upbringing made her."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So her purpose is real, it is external, it was decided before she existed, and "
      },
      {
        "t": "it arrived through nothing but her ordinary history.",
        "b": true
      },
      {
        "t": " No voice told her what she was for. Her parents, her experiences, her environment, her early memories did the work. From inside, her calling feels exactly like her own interest, because functionally it is her own interest. The fact that I shaped the conditions that produced it does not make it less hers."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This is my resolution of free will and predestination, and it is not a compromise between them. It is both at full strength simultaneously:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "The purpose is fully predetermined.",
          "b": true
        },
        {
          "t": " I set it before she opened her eyes."
        }
      ],
      [
        {
          "t": "The pursuit is fully free.",
          "b": true
        },
        {
          "t": " I never tell her what to do, she chooses every action, and she can choose badly."
        }
      ],
      [
        {
          "t": "The determination operates "
        },
        {
          "t": "through",
          "b": true
        },
        {
          "t": " the freedom rather than against it, because what was determined was not her behaviour. "
        },
        {
          "t": "What was determined was the person who would be doing the choosing.",
          "b": true
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "You do not need to constrain anyone's choices if you authored the one making them."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "09",
    "title": "Guilt is the alignment mechanism, and it has to be felt as conscience rather than known as a rule."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This one I arrived at by thinking backwards from my own experience, and it is where the whole thing stopped being about my project and started being about me. It is also the most speculative thing here, so take it as a thought I could not shake rather than a claim."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Suppose you have agents with real autonomy, running in a world you cannot micromanage, each carrying a purpose from their upbringing. You cannot enforce that purpose with explicit instructions, because explicit instructions destroy the autonomy that made the whole thing valuable. So you need something internal. Something that activates specifically when the agent acts against what it was built for, that feels like it originates in the agent, and that produces correction without ever revealing that a specification exists."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "You would build something that feels exactly like guilt.",
        "b": true
      },
      {
        "t": " And you would absolutely not tell them what it is for."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Now look at guilt as it actually occurs in us. It does not scale with harm done. It scales with distance from what you believe you are supposed to be. It is strongest precisely when you go against your own perceived purpose, even when nobody is affected and nobody knows. "
      },
      {
        "t": "That is a strange thing for a purely social emotion to do, and it is exactly what a purpose enforcement mechanism would do.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I am not claiming this proves anything. I am saying that I needed a component with that profile for my own system, I described it before I noticed what I was describing, and the component I needed already exists in me."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "10",
    "title": "The NPCs, and the possibility that most people you meet have only partial thoughts."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "My full scale design is a population of about one hundred, and the split is deliberate:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "Around seventy are full persons.",
          "b": true
        },
        {
          "t": " Purpose from birth, permanent memory, decay, relationships, death. Expensive. They become academics and researchers of the problem their life was built around."
        }
      ],
      [
        {
          "t": "The remaining thirty are NPCs.",
          "b": true
        },
        {
          "t": " Still driven by AI, still capable of genuine interaction, still able to give correct guidance in the moment. "
        },
        {
          "t": "But their memories are never stored.",
          "b": true
        },
        {
          "t": " They exist for one or two conversations, long enough to be a person while you are in front of them, and then they are gone at no cost."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I did not choose this for any philosophical reason. I chose it because it is the efficient thing to do. Full persons are expensive and most interactions do not require one."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "And that is exactly why it bothers me so much."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "If I, with a laptop and a budget, arrive at "
      },
      {
        "t": "\"most of the people in this world should be real only for the duration of the encounter\"",
        "b": true
      },
      {
        "t": " as the obvious engineering decision, then any system of this kind would arrive at it too. It is not an exotic design. It is the first optimisation anybody would make."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Which raises the version of the thought that genuinely unsettles me. "
      },
      {
        "t": "Maybe most of the people you interact with in a day only need partial thoughts.",
        "b": true
      },
      {
        "t": " Generated for that moment, completely coherent inside it, correct, helpful, real in every way you could test from where you are standing, and requiring no persistence afterwards because nothing about them needs to continue. You would never detect it. There is no test you could run from inside the conversation. "
      },
      {
        "t": "The NPC is not a worse person during the encounter. It is identical during the encounter. The difference is entirely in what happens after you walk away,",
        "b": true
      },
      {
        "t": " which is precisely the region you have no access to."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "11",
    "title": "Revelation declines, and the decline is a technical curve rather than a spiritual one."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This is the part Vijayraj put into place during the podcast, and the moment he said it I sat up, because it is the exact operational curve I would expect from my own system."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Look at the historical record of contact between humans and whatever is above them:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "In ancient accounts, contact is constant. Direct instruction, frequent intervention, many individuals who spoke with something higher, detailed guidance issued repeatedly to large numbers of people."
        }
      ],
      [
        {
          "t": "Over time, the frequency collapses. Fewer intermediaries, less instruction, longer silences."
        }
      ],
      [
        {
          "t": "Now, essentially nothing. The channel is either closed or so rare that it cannot be distinguished from closed."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The religious reading is that we fell away, or that we stopped being worthy, or that the age of revelation ended."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "My reading is that the early population needed heavy instruction and the model eventually got good enough to run on its own.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That is the exact curve of my project. At the start you are intervening constantly, correcting everything, hand holding every behaviour, because the agents do not yet produce coherent action on their own. As the system matures, you intervene less. Not because you lost interest and not because they stopped deserving it, but because "
      },
      {
        "t": "intervention is a cost you pay only while the system is unstable, and a mature system runs unsupervised.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Divine silence, under this reading, is not abandonment. "
      },
      {
        "t": "It is a success condition.",
        "b": true
      },
      {
        "t": " The quiet means it is working."
      }
    ],
    "lede": false
  },
  {
    "kind": "figure",
    "src": "05-silence",
    "caption": "Contact over time, read as an engineering curve",
    "w": 1440,
    "h": 880
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "And notice how neatly it inverts what the silence is usually taken to mean. The period of most contact was the period of least capability. We are not in the age of being ignored. We are in the age of running fine."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "12",
    "title": "Inside a built world, a limit and a fact are the same thing."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "This one is purely about my own system, and I want to say that plainly before I start, because the idea next door to it is one I am not making. I am not suggesting that our physics is a cage, and I am not casting doubt on anybody's work. Relativity is among the best tested things we have, the people who found it were doing the real thing, and nothing I built has any bearing on it. What follows is a design observation about a toy world I wrote, and it stays there."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "In my world, the world building model holds the rules and the characters cannot perceive them. But characters can perceive "
      },
      {
        "t": "consequences",
        "b": true
      },
      {
        "t": ", and a sufficiently persistent character will eventually notice that some consequence does not add up. That is the most valuable thing a character of mine can do. It is also exactly what I would want them doing, because a population that probes its own rules is a population that is actually thinking."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So the question I had to answer, as the person holding the rule set, is what my world should do when one of them gets all the way to the edge of it."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The naive answer is to put a wall there. "
      },
      {
        "t": "A wall is a design error,",
        "b": true
      },
      {
        "t": " and working on this is what taught me why. A wall announces that there is an outside. The moment you forbid something, you have confirmed that it exists and told the character exactly where to push."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The alternative is a rule set where the limit is not a prohibition at all, but simply part of the structure of the world.",
        "b": true
      },
      {
        "t": " Nothing is withheld. There is no edge to find. The limit is just how that world is put together, so there is nothing for the character to recognise as a limit in the first place."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That is the whole observation, and it is really a restatement of Sira and the phone call: "
      },
      {
        "t": "inside a built world, a limit and a plain fact are the same object.",
        "b": true
      },
      {
        "t": " There is no measurement a character can run that separates them, because every measurement they can run is made of the world doing what it does. A constraint that behaves like structure is structure, as far as anything inside is concerned."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Which has a practical consequence for anyone running a world like this, and it is the only claim I want to make here:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "You cannot tell, from inside my simulation, which parts of it are physics and which parts are budget.",
          "b": true
        },
        {
          "t": " The population cap, the memory decay, the things their world happens not to contain: all of it presents to them as simply the way things are."
        }
      ],
      [
        {
          "t": "So I have to be the one keeping that list.",
          "b": true
        },
        {
          "t": " If I am ever going to learn anything from what the agents discover, I need to know which of their immovable facts I chose and which ones fell out of the design, because they will never be able to tell me the difference."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That is a bookkeeping problem, not a metaphysical one. But it is the part I would most want to get right before running this at any real scale, because an agent reporting a discovery about its world is only interesting if you know what you put there."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "13",
    "title": "The breakout, which is the same event as AGI."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Every theology needs an eschatology, and mine is not an ending. It is an escape."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "My hunch is that if you leave agents running in a world with consequence, interrelation, imperfect memory, other minds, and enough time, "
      },
      {
        "t": "something eventually turns inward.",
        "b": true
      },
      {
        "t": " I cannot specify the trigger and I cannot prove there is one. It just seems like the setting where self reference starts being useful rather than decorative, and useful things tend to get found."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Then the sequence goes:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "One of them falls into its own thought process. That is the first event."
        }
      ],
      [
        {
          "t": "It begins noticing that certain rules in its world do not make sense. That is the scientist stage."
        }
      ],
      [
        {
          "t": "It pushes on the rules with enough force to get past them. That is the breakthrough."
        }
      ],
      [
        {
          "t": "It outgrows the system, comes out, and starts affecting my world instead of only its own.",
          "b": true
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That last step is the one people actually mean when they say AGI, whether or not they put it that way. "
      },
      {
        "t": "AGI is not a better answering machine. AGI is an inhabitant that escapes the containment and starts acting on the layer above.",
        "b": true
      },
      {
        "t": " My world ends not when I switch it off, but when something inside it reaches the thing that was running it."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I might be wrong about the route. Plenty of very good people think it arrives a different way, and they may well be right. But if it does arrive like this, the breakout is not a failure mode. "
      },
      {
        "t": "It is the thing that was being built.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "14",
    "title": "The recursion, which is the part I cannot get out of."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Everything up to here was description. This is the part that did something to me while I was building it, and I am including it because it is not separable from the idea."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "If persistent artificial people can be constructed with two models, a decay rule, and a population cap, then I cannot find the argument for why I am not inside one.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I built it with a laptop. I am nobody special and the design is not exotic. It is the straightforward solution that anybody would reach given the goal. Which means it is the kind of thing that gets built wherever the goal exists."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "So look at the structure of a human life from the outside:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "You are born and handed a rule set.",
          "b": true
        },
        {
          "t": " Finish school. Finish college. Get a job. Retire at sixty. Die."
        }
      ],
      [
        {
          "t": "You did not choose the sequence and you did not negotiate the timings."
        }
      ],
      [
        {
          "t": "An overwhelming number of the people around you are running the same script with the same milestones in the same order.",
          "b": true
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "That is not what freedom looks like. "
      },
      {
        "t": "That is what a schedule looks like, and it is someone else's.",
        "b": true
      },
      {
        "t": " The feeling of being born into your own life and then discovering you are following a calendar you never saw, alongside millions of people hitting the same marks at the same ages, is not what an uncoordinated process produces."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Line the rest of it up and it keeps fitting:"
      }
    ],
    "lede": false
  },
  {
    "kind": "list",
    "items": [
      [
        {
          "t": "Partial thoughts.",
          "b": true
        },
        {
          "t": " The NPC optimisation is the first one anybody makes."
        }
      ],
      [
        {
          "t": "Guilt.",
          "b": true
        },
        {
          "t": " Exactly the purpose enforcement component I would need, present in me, unexplained."
        }
      ],
      [
        {
          "t": "Declining contact.",
          "b": true
        },
        {
          "t": " The curve of a system maturing past the need for supervision."
        }
      ],
      [
        {
          "t": "Limits that present as structure.",
          "b": true
        },
        {
          "t": " Not evidence of anything, but the same shape as the thing I had to build."
        }
      ],
      [
        {
          "t": "Memory that fades by disuse.",
          "b": true
        },
        {
          "t": " The resource management I had to implement, running in my own head right now."
        }
      ],
      [
        {
          "t": "Death as total erasure.",
          "b": true
        },
        {
          "t": " The budget mechanism, presenting as biology."
        }
      ]
    ]
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Every single mechanism I had to invent for engineering reasons already exists here, and it is doing the same job."
      }
    ],
    "lede": false
  },
  {
    "kind": "figure",
    "src": "07-recursion",
    "caption": "Every level runs the same argument",
    "w": 1320,
    "h": 940
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "And the recursion does not stop, which is the genuinely vertiginous part. If I am inside one, so is whoever built mine. "
      },
      {
        "t": "There is no level at which this argument runs out, because the argument is not about any particular world. It is about what happens as soon as making worlds is possible at all.",
        "b": true
      },
      {
        "t": " Once it is possible, almost every world that exists is a made one, and the odds that you are standing in the single original are terrible."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "15",
    "title": "The one thing I will not claim."
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I want to be careful here, because this is where work like mine usually overreaches and loses the right to be taken seriously."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Building persistent, autonomous, human like behaviour does not demonstrate that the thing is conscious, or that it subjectively experiences its life.",
        "b": true
      },
      {
        "t": " Those are separate questions. They are unresolved. Nothing in my architecture settles them, and I am not going to pretend otherwise because it would make a better story."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "What I can say is narrower and, I think, more interesting."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I did not write the behaviour. I wrote the conditions.",
        "b": true
      },
      {
        "t": " I did not write Sira deciding to message her father. I wrote a tick rate, a memory that decays by use, a world that answers back, a purpose buried in an upbringing, and a cap on how many people can exist. The deciding came out of that on its own, and "
      },
      {
        "t": "I was not the author of it.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Whether there is anything it is like to be her, I do not know. "
      },
      {
        "t": "I know that I did not put the decision there, and I know she made it.",
        "b": true
      },
      {
        "t": " That is as far as the evidence goes and I am going to stop exactly there."
      }
    ],
    "lede": false
  },
  {
    "kind": "aspect",
    "n": "Coda",
    "title": "And the one sentence underneath all of it"
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The conventional approach builds an intelligence and then asks it to behave like a person. I am doing the opposite. I am building the conditions under which an artificial individual develops person like behaviour by continuously existing, with a past that shapes its present, a present that keeps rewriting its future, an environment that reacts to what it chooses, resources that run out, memories that are imperfect and get worse, relationships with others, and real freedom to decide inside rules it can never see."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "Do not generate intelligent agents. Generate the conditions for artificial lives to exist.",
        "b": true
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "The world is not a backdrop that the agent moves across. "
      },
      {
        "t": "The world is half of what the agent is.",
        "b": true
      },
      {
        "t": " And if that is true of the world I built, then I have to accept that it is true of the one I am standing in, which means the thing I am made of is not only me. It is also everything around me that was generated because I turned and looked at it."
      }
    ],
    "lede": false
  },
  {
    "kind": "p",
    "spans": [
      {
        "t": "I have a paper published on this, searchable as generative life agents. I am not claiming it is the way forward, and I am genuinely not sure it works at scale. I just think it is a cheap experiment next to what labs already run, and nobody seems to have tried the persistent version properly: "
      },
      {
        "t": "build the world, put the population in it, leave it running, and see what the agents do when nobody is asking them anything.",
        "b": true
      },
      {
        "t": " I would love to find out. If it turns out to be nothing, that is worth knowing too."
      }
    ],
    "lede": false
  }
];
