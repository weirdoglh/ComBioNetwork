# 1.Neurons and motifs

In this lab, we will introduce the idea of computational modeling. A model is the abstraction of the actual physical world. To study the brain function, the modern approach is to abstract the computation properties of the brain. In other words, we treat the brain as a specialized computation device in computational neuroscience.

## Abstraction
Which level of abstraction to use and which property to retain depend on the question we want to ask about a system. Consider the predator-prey dynamics described by the Lotka-Volterra equations. If we are interested in studying the overall stability and oscillatory behavior of the ecosystem, we might focus on higher-level abstractions such as population densities, prey consumption rates, and predator reproduction rates. On the other hand, if our goal is to understand the underlying mechanisms driving population fluctuations, we might delve into lower-level abstractions such as individual behaviors, interactions between individual predators and prey, and environmental factors affecting resource availability. Similarly, in neuroscience, choosing the appropriate level of abstraction and determining which neuronal properties to retain depend on the specific questions we aim to address about neural function and behavior.

## Computation
The computational property of the brain simply means what arithmetic or non-arithmetic operations the brain can perform. In general, the brain receives external sensory information, processes the information withn internal dynamics, and finally produces actions. It is a computation device that is highly autonomous and coupled with the environment. The goal of computational neuroscience is to understand *what* kind of operations are performed by the brain, *how* are they performed, and *why* are they performed.

In the following sections, we will build models from a single neuron, to a small motif, and finally to an STG network.

## Introductory Presentation
[Link to PDF file](https://drive.google.com/file/d/1M9cNtkS-0DrsgeR5JWav9_Os0u2CbbqZ/view?usp=drive_link)


## Contents
1. A spiking neuron.
2. Connecting neurons.
3. Tuning an STG circuit.

## Resources
* [Neuronal Dynamics](https://neuronaldynamics.epfl.ch/online/index.html)
