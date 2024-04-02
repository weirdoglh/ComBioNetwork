# 2.Circuit and function

In this lab, we will move from static circuit to dynamics circuit. We first invesigate how changes in the connectivity shall affect the performance of a functional netowrk. Then we move to plasticity rules that can tune the connectivity in an un-supervised way to perform certain task. 

## STG

In {cite}`prinz2004`, the pylorythm circuit is systematically investigated and demonstrate an intrinsic principle of biological system -- **_degeneracy_**. In the case of STG, it means in the vast parameter space of the network, there are many configurations that can perform the same task. The different configurations show different robustness to connectivity disturbance which allow the network to be passively adaptive.

## Plasticity rules

In the lab, we will learn about a simple rate-dependent synaptic plasticity rule that can be used to tune the connectivity of a network to perform a certain task in the tuning curve section. Again, this an abstraction of the real plasticity rules assuming spiking activities are totally random {cite}`sjostrom2001`.

## Tuning curve

Tuning curve simply denotes that neurons show distinct responses to different external stimuli which we will see in the tuning curve section. The tuning curve leads to a representation of the stimulus in the brain which is an interesting field of study {cite}`kriegeskorte2021neural`. The most famous tuning curve would be the place cell {cite}`abbott2014nobel`, which encodes the location information in physical space. Take a look at the [recording video](https://www.youtube.com/watch?v=DNtClmdmUks).

There are many computational models founded on the idea of tuning curve, and most of them focus on how brain encode and decode information, e.g.the neural engineering framework (NEF) {cite}`ekolay2014nengo`.

In the following sections, we will compare different configurations of the STG network, modeling synaptic plasticity (rate-dependent), and play with a toy circuit that learns the touch stimulus.

## Contents
1. Degeneracy and robustness.
2. Synaptic plasticity.
3. Tuning curve.

## Resources
* [Neuronal Dynamics](https://neuronaldynamics.epfl.ch/online/index.html)
