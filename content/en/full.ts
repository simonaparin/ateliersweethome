export const full = {
  reconstruction: {
    situations: [
      { title: "You bought a house and do not know where to start", text: "First we need to understand the condition of the structure, roof, floors, walls and utilities." },
      { title: "You are considering a house before buying", text: "An initial inspection helps reveal the likely scope of work and the main risks." },
      { title: "The roof, walls, beams or floors raise questions", text: "Sagging, cracks, moisture and old timber need a careful on-site assessment." },
      { title: "The house is beautiful but inconvenient to live in", text: "Its character can stay while warmth, water, lighting, bathrooms and a practical layout are added." },
      { title: "You want to keep stone, timber, doors, windows or the layout", text: "Each old element is considered separately: it may be restored, repaired or replaced." }
    ],
    decisions: {
      title: "What to keep, strengthen and replace",
      items: ["We retain elements that are sound, valuable and safe to use.", "We strengthen and repair elements that can return to reliable working condition.", "We replace elements whose condition can no longer provide safety and durability."],
      note: "The final decision follows inspection and, where necessary, opening selected areas."
    },
    objectContext: { title: "Real projects and work on site", text: "We show real houses, details and results. Every project description is based only on confirmed facts." },
    cases: { title: "Real projects", emptyText: "This section contains only real work, photographs, a description of the task and the workshop's confirmed role." }
  },
  roof: {
    checkText: "We inspect rafters, wall support, the old covering, moisture, rot, eaves and junctions. After inspection we propose repair, replacement of damaged timber or a new rafter system.",
    situations: ["The roof leaks and the house is beginning to deteriorate.", "A complete rafter-system replacement is needed.", "The house needs covering quickly.", "The roof is the first stage of a larger reconstruction.", "The covering needs replacement but the condition of the rafters is unclear.", "You are building a house or extension and need a new roof."],
    workshop: { title: "Working format", text: "We assess the existing structure before deciding the scope. The solution can cover repair, replacement or a new roof for a house, extension or canopy.", extra: "The sequence of work is agreed after the condition of the roof and the support on the walls are understood." },
    start: { title: "The first step is to show us the roof", steps: ["Send overall and close-up photos of the roof.", "Tell us where the property is and what concerns you.", "We review the material and ask clarifying questions.", "If the task is a fit, we arrange a call or inspection."] },
    faq: { title: "Common questions", items: [["Can the price be understood from photos?", "Photos help identify the task. The exact scope and price follow inspection."], ["Can only the covering be replaced?", "Yes, when the timber structure is sound enough for the new covering."], ["Do you build new rafter systems?", "Yes. The solution is chosen after inspection of the roof and wall support."]] }
  },
  "summer-kitchen": {
    situations: ["You want a shaded place for cooking and meals in the yard.", "The site needs a canopy, worktop, sink, lighting or storage.", "A barbecue area should become part of a practical daily space.", "The kitchen needs to work with the house, garden and existing utilities."],
    siteCheck: { title: "We assess the site before proposing a solution", text: "We look at dimensions, levels, the base, water, electricity, access and how the space will be used.", items: ["dimensions and access", "ground and base", "existing water and electricity", "sun, rain and wind", "location of the work zone, table and storage"] },
    workshop: { title: "Working format", text: "The kitchen is assembled as one whole: base, canopy, materials, utilities and everyday use of the yard.", extra: "The scope is agreed after the site and the desired use are clear." },
    start: { title: "The first step is to show the site", steps: ["Send photos of the site and dimensions if you have them.", "Tell us what you need: kitchen, canopy, sink, barbecue, table, light or storage.", "We review what can be done in this location.", "If the task is a fit, we arrange a call or inspection."] },
    faq: { title: "Common questions", items: [["Can an outdoor kitchen be built without a canopy?", "Yes. A canopy often makes the work zone, table, lighting and finishes more comfortable to use."], ["Can you build only a canopy?", "Yes. We first clarify whether it may later include a kitchen, table, barbecue, lighting or storage."], ["Can microcement be used outdoors?", "The choice depends on the base, moisture, sun, surface protection and use."], ["How much does an outdoor kitchen cost?", "The exact cost depends on the base, canopy, metal, roof, utilities, finishes and access to the site."]] }
  }
} as const;
