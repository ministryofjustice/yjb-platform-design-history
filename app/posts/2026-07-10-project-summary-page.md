---
title: Project background
description: This is a summary of the project
date: 2026-07-10
tags:
  - background
---

## The Youth Justice network

[Visual: Map of the youth justice system, the teams and connections.]

The youth justice network across England and Wales is vast and deeply interconnected. This map illustrates the key organisations, local services, and day-to-day relationships that underpin the system.

## A child's journey 

[Visual: A child's timeline moving through the community and secure estate.]

Behind the software is a human story. This timeline maps a child’s step-by-step experience through the justice system, showing exactly which teams interact with them, when they do it, and why.

## The problem

[Visual: The 'As-Is' reality of frontline casework]

Staff are currently trying to work with, and around, a 10-year-old computer system [YJAF] that simply doesn't support their daily work. Because different software packages across the country don't talk to each other, vital information is routinely late, missing, or inconsistent. Staff are left with a huge paperwork burden—juggling offline spreadsheets, emails, and phone calls just to fill in data gaps. This forces individual workers to carry all the operational risk.

## The vision

We want to make sure the right information gets to the right person, at the exact moment they need it. Every single time.

Right information. Right person. Right time.

Our goal is to build a modern, unified Youth Justice Platform that replaces old legacy tech with a strong digital foundation. By gathering multiple files into a single, secure digital record, we can capture a child’s engagement as one continuous journey.

### Child First approach

We're taking a Child First (link) approach. To be completely clear, this isn't software for children to use. It is an efficient, reliable service for the professional practitioners and community teams supporting them. Giving workers trustworthy tools means they can make better-informed decisions and spend more time focusing on the child, resulting in happier, safer outcomes for the child and public.

## What the future looks like

[Visual: Map of the future youth justice system]

Instead of perpetuating legacy systems, the new platform will provide a modern, secure, and accessible service aligned with GOV.UK standards. Built for long-term reliability and continuous improvement, it will facilitate secure information sharing and offer users prompt, actionable feedback to enhance their experience.

## How we're going to get there

We believe the best solutions emerge through evidence, not prediction. Instead of relying on rigid project plans that can constrain change, we use an agile, user-centred approach—researching, co-designing, and testing iteratively with real users, then scaling what works with confidence.

To kick things off, we ran a Discovery Phase between January and April 2026. This was our initial step to understand the real problems staff face before writing any code. We didn't sit at our desks guessing; our team visited a YOI, mapped out 50 separate system touchpoints, and sat down for 25 in depth interviews with staff across the service.

We are now transitioning into the next phase. This is an experimental period where we build small, quick, prototypes to test our ideas in the real world before full-scale building begins. We are actively prototyping three high-impact areas:

- Daily Bed Unlock Reporting: An intuitive web interface to quickly manage daily secure estate placements.

- Release Date Calculator: A semi-automated system helper to streamline legally sensitive date calculations and lower staff stress.

- Serious Incident Reporting: A fast, simple workflow to report and track critical incidents without messy spreadsheets.


## Roadmap

View the raw materials or read our detailed findings the Discovery Phase folder (link).

 

## Discovery phase

_January – April 2026_

We spent 4 months on the ground figuring out how youth justice work actually happens day-to-day across England and Wales. Our mission was simple: look past basic assumptions, step away from our desks, and see how the current system supports or gets in the way of frontline routines. We set out to map the exact moments where administrative friction and heavy mental load spike, tracking where technical setups place unfair operational risk directly onto the shoulders of busy staff.

## How the work came together: our research activity

Good creative communication means breaking the work down into clear, logical steps. To build an honest, evidence-based picture of the youth justice ecosystem, we gathered a library of raw operational materials through live teamwork:

25 in-depth user interviews: We held one-to-one conversations with staff running the service across 4 core user groups, including the Youth Justice Service (YJS), the Secure Estate, the Youth Custody Service (YCS), and Youth Justice Board (YJB).

1 interactive field visit: We conducted an immersive field visit, observing live casework and day-to-day workflows to understand how services are delivered on the ground.

Mapped 50+ touchpoints: We identified and visually mapped over 50 specific places where staff interact with computer systems throughout a child's journey.

Identified 10+ disconnected systems: Our desk research uncovered more than 10 separate software platforms, spreadsheets, and databases that staff have to continuously jump between to get their work done.

## The human impact: measuring frontline frustration

To measure exactly how difficult the legacy Youth Justice Application Framework (YJAF) is to use in practice, we adapted the scientific NASA Taskload Index into a simple 0 to 7 effort scale. The results showed a massive administrative burden sitting with staff, with Young Offender Institution (YOI) team members feeling the strain the absolute most.

User group

Mental demand score (0-7)

Stress and frustration score (0-7)

Effort to complete correctly score (0-7)

YOI (secure estate)

4.8

5.4

5.0

Youth Custody Service (YCS)

2.9

3.7

3.9

Youth Justice Service (YJS)

2.4

3.0

3.1

Youth Justice Board (YJB)

2.0

2.5

3.5

> "YJAF is so glitchy that I don’t trust typing directly into it. I write everything in Word and then paste it across—otherwise it just disappears." — Placements Team (YCS)

> "We’re constantly re‑entering the same information in different places because nothing talks to anything else." — Caseworkers (YJS)

## Under the hood: the legacy tech underneath YJAF

Discovery uncovered that staff aren't struggling because of a lack of skill; they are struggling because the underlying system architecture forces them to absorb unnecessary technical complexity:

Unsupported frontend software: The interface that users see every day relies on an old version of the Angular framework (AngularJS 1.x) that has been completely unsupported since 2021. This makes the framework significantly harder to improve and slower than modern alternatives.

Unpatchable security vulnerabilities: Because the framework no longer receives official security updates, software vulnerabilities cannot be patched without major technical effort.

Discouraged design patterns: YJAF's single-page layout follows an architecture that is formally discouraged by modern GOV.UK Design Standards, as single-page setups are no longer considered best-practice for accessibility.

Tightly connected microservices: The backend runs on 28 separate modules hosted on AWS Fargate. Instead of being independent, they are tightly connected to each other, which drives up running and maintenance costs without providing modern cloud resilience.

## The document pipeline: version clashes and overrides

One of our biggest deep-dive areas was the statutory assessment process known as Asset+ and its file transfer network, Connectivity. Because there is no single central version of a child's record, the system setup creates massive friction across boundaries:

Fragmented document ownership: Every separate youth justice organisation holds its own local copy of a child's assessment file, meaning there is no central owner.

Data loss and version clashes: Because there are no built-in editing safeguards, if 2 practitioners edit a child's file at the same time, work gets overridden. This causes gaps in the official record and blocks crucial processes.

Insecure manual workarounds: To bypass these blocks, staff frequently resort to manual file transfers, such as emailing raw PDFs.

Opaque feedback loops: The transfer architecture immediately tells a user that an upload was "successful," even if it subsequently fails completely in the background.

Confusing error logs: Error messages lack useful context, leaving practitioners entirely blind as to how to fix the issue themselves without technical intervention. This design failure results in users perceiving that the system fails over 50% of the time.

## Moving from Discovery to Alpha

Our data shows that users working in completely different areas are encountering the exact same core underlying issues at different points in their week. They all share the exact same basic goals: to enter information once, to trust the data everywhere, and to have better system support for high-risk decisions.

We are moving onwards into the Alpha Phase to investigate these difficult problems through rapid prototyping, actively testing how our new web interface options can better absorb administrative complexity for frontline staff.

Explore our Alpha Phase Roadmap & Active Prototypes (link) to see how we plan to validate these findings and build the future youth justice deliverables.
