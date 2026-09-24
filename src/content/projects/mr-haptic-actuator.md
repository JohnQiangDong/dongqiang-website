---
title: MR Haptic Actuator
shortTitle: MR Haptic Actuator
slug: mr-haptic-actuator
summary: A magnetically self-sealed rotary haptic actuator that combines compact MR-fluid torque generation, low-hysteresis PWM excitation, and model-based torque control.
subtitle: Compact torque rendering through magnetorheological actuation and hierarchical control.
type: research
featured: true
order: 1
tags:
  - Magnetorheological fluids
  - Haptic feedback
  - Mechatronics
  - Nonlinear control
hero:
  type: image
  source: /media/projects/mr-haptic-actuator/mr-actuator-device-architecture.webp
  alt: Sectional and exploded diagrams of the magnetically self-sealed MR rotary haptic actuator, including its sealing and torque-generation regions.
gallery:
  - source: /media/projects/mr-haptic-actuator/mr-actuator-experiment-setup.webp
    alt: Photograph and system diagram of the MR haptic actuator experimental platform with motor, torque sensor, PWM driver, CompactRIO, and LabVIEW control.
    caption: The experimental platform couples the actuator to a motor and torque sensor, with real-time PWM control and measurement through CompactRIO and LabVIEW.
  - source: /media/projects/mr-haptic-actuator/mr-actuator-thermal-stability.webp
    alt: Torque tracking and temperature-rise plots from a one-and-a-half-hour actuator test, alongside the thermocouple locations.
    caption: During the reported 1.5-hour test, periodic torque tracking was maintained while the housing temperature rise near the coil approached 2.5 °C.
  - source: /media/projects/mr-haptic-actuator/mr-actuator-biomechanical-reference-validation.webp
    alt: Model-to-haptic signal chain and measured torque tracking for three biomechanics-derived reference profiles.
    caption: Model-derived reference profiles were converted to torque commands to test noncanonical haptic trajectories at three feedback levels.
links:
  paper: https://arxiv.org/abs/2608.19635
  arxiv: https://arxiv.org/abs/2608.19635
updates:
  - date: 2026-09-23
    title: Drug-infusion hardware-in-the-loop demonstration
    description: A model-derived intracerebral infusion pressure trajectory is converted into a torque reference and rendered by the physical MR haptic actuator.
    media:
      - type: video
        source: /media/projects/mr-haptic-actuator/mr-actuator-drug-infusion-hardware-in-loop-demo.mp4
        poster: /media/projects/mr-haptic-actuator/mr-actuator-drug-infusion-hardware-in-loop-demo-poster.webp
        alt: Hardware-in-the-loop demonstration showing a brain drug-infusion pressure interface, live torque traces, and the operating MR haptic actuator.
---

This project develops a compact rotary haptic actuator using magnetorheological fluid to turn an electrical command into adjustable resistive torque. The work treats the mechanism, magnetic sealing, drive electronics, experimental characterisation, and real-time control as one integrated system.

Permanent magnets create local sealing fields around the shaft, while a coil-driven multidisk region produces controllable torque. Experiments then identify how PWM frequency changes the actuator's hysteresis and provide the basis for a layered controller that combines inverse-model feedforward, branch- and rate-dependent hysteresis compensation, PI feedback, and a boundary-layer sliding-mode correction.
