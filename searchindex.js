Search.setIndex({"docnames": ["Lab1/index", "Lab1/motif", "Lab1/neuron", "Lab1/stg", "Lab2/Lab2", "Lab2/degeneracy", "Lab2/index", "Lab2/synplast", "Lab2/tuningcurve", "intro", "material"], "filenames": ["Lab1/index.md", "Lab1/motif.ipynb", "Lab1/neuron.ipynb", "Lab1/stg.ipynb", "Lab2/Lab2.ipynb", "Lab2/degeneracy.ipynb", "Lab2/index.md", "Lab2/synplast.ipynb", "Lab2/tuningcurve.ipynb", "intro.md", "material.md"], "titles": ["1.Neurons and motifs", "Motif", "Neuron, input, synapse", "STG circuit", "Lab 2: Plasticity and learning", "Degeneracy and robustness", "2.Circuit and function", "Synaptic plasticity", "Tuning curve, encoding, and decoding", "Computational Modeling of Biological Neural Networks", "References"], "terms": {"In": [0, 1, 2, 3, 4, 5, 6, 7, 8], "thi": [0, 1, 2, 3, 4, 5, 6, 8], "lab": [0, 1, 2, 3, 5, 6, 7, 8, 9], "we": [0, 1, 2, 3, 4, 5, 6, 8], "introduc": [0, 1], "idea": [0, 1, 6], "model": [0, 1, 3, 5, 6, 7, 8], "A": [0, 9, 10], "i": [0, 1, 2, 3, 4, 5, 6, 7, 8], "actual": 0, "physic": [0, 6], "world": 0, "To": 0, "studi": [0, 6], "brain": [0, 6, 10], "function": [0, 4, 7, 9], "modern": 0, "approach": 0, "properti": [0, 4, 7, 8], "other": [0, 1, 2, 3, 4, 5], "word": [0, 1], "treat": 0, "special": 0, "devic": 0, "neurosci": [0, 9, 10], "which": [0, 1, 2, 3, 4, 5, 6, 7, 8], "level": [0, 1, 2, 4, 8], "us": [0, 2, 3, 4, 6, 8, 9], "retain": [0, 2], "depend": [0, 1, 2, 6], "question": [0, 4], "want": 0, "ask": 0, "about": [0, 1, 2, 6], "system": [0, 4, 6], "take": [0, 6], "car": 0, "instanc": 0, "The": [0, 2, 4, 6, 9], "simpli": [0, 6], "mean": [0, 1, 2, 4, 6, 7, 8], "what": [0, 1, 2, 3, 4, 5, 7, 8], "arithmet": 0, "non": [0, 4, 8], "oper": 0, "can": [0, 1, 2, 3, 4, 5, 6, 8], "perform": [0, 4, 6], "gener": [0, 2, 3, 4, 5], "receiv": [0, 4], "extern": [0, 6], "sensori": [0, 4, 8], "inform": [0, 6], "process": 0, "withn": 0, "intern": 0, "dynam": [0, 2, 4, 6], "final": [0, 2, 4, 7], "produc": 0, "action": 0, "It": [0, 2], "highli": 0, "autonom": 0, "coupl": [0, 2], "environ": [0, 1, 2, 3, 4, 5, 7, 8], "goal": 0, "understand": 0, "kind": 0, "ar": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], "how": [0, 1, 2, 3, 4, 5, 6, 7, 8], "thei": [0, 1, 2], "why": [0, 1, 3, 4, 5], "follow": [0, 1, 2, 3, 4, 5, 6, 7, 8], "section": [0, 1, 6], "build": 0, "from": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "singl": [0, 1, 4, 8], "small": [0, 4, 8], "an": [0, 1, 2, 4, 6, 8, 9], "stg": [0, 1, 2, 4, 5, 7, 8], "network": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], "spike": [0, 1, 2, 3, 5, 6, 8], "connect": [0, 1, 2, 3, 4, 5, 6, 7, 8], "tune": [0, 2, 10], "circuit": [0, 1, 4, 5, 9, 10], "titl": [1, 2, 3, 4, 5, 7, 8], "run": [1, 2, 3, 4, 5, 7, 8], "initi": [1, 2, 3, 4, 5, 7, 8], "pip": [1, 2, 3, 4, 5, 7, 8], "instal": [1, 2, 3, 4, 5, 7, 8], "ipympl": [1, 2, 3, 4, 5, 7, 8], "ipywidget": [1, 2, 3, 4, 5, 7, 8], "net": [1, 2, 3, 5, 7, 8], "q": [1, 2, 3, 5, 7, 8], "import": [1, 2, 3, 4, 5, 7, 8], "matplotlib": [1, 2, 3, 4, 5, 7, 8], "pyplot": [1, 2, 3, 4, 5, 7, 8], "plt": [1, 2, 3, 4, 5, 7, 8], "widget": [1, 2, 3, 4, 5, 7, 8], "slider": [1, 2, 3, 4, 5, 7, 8], "numpi": [1, 2, 3, 4, 5, 7, 8], "np": [1, 2, 3, 4, 5, 7, 8], "interact": [1, 2, 3, 4, 5, 7, 8], "displai": [1, 2, 3, 4, 5, 7, 8], "colab": [1, 2, 3, 4, 5, 7, 8], "set": [1, 2, 3, 4, 5, 7, 8], "try": [1, 2, 3, 4, 5, 7, 8], "googl": [1, 2, 3, 4, 5, 7, 8], "output": [1, 2, 3, 4, 5, 7, 8], "enable_custom_widget_manag": [1, 2, 3, 4, 5, 7, 8], "except": [1, 2, 3, 4, 5, 7, 8], "importerror": [1, 2, 3, 5, 7, 8], "pass": [1, 2, 3, 5, 7, 8], "librari": [1, 2, 3, 5, 7, 8], "stg_net": [1, 2, 3, 5, 7, 8], "neuron": [1, 3, 5, 6, 7, 9, 10], "lif": [1, 2, 3, 4, 5, 7, 8], "input": [1, 3, 4, 5, 7, 8], "poisson_gener": [1, 2, 3, 4, 5, 7, 8], "gaussian_gener": [1, 2, 3, 4, 5, 7, 8], "current_injector": [1, 2, 3, 4, 5, 7, 8], "conn": [1, 2, 3, 4, 5, 7, 8], "simul": [1, 2, 3, 4, 5, 7, 8], "helper": [1, 2, 3, 4, 5, 7, 8], "plot_volt_trac": [1, 2, 3, 4, 5, 7, 8], "figur": [1, 2, 3, 4, 5, 7, 8], "fig_w": [1, 2, 3, 4, 5, 7, 8], "fig_h": [1, 2, 3, 4, 5, 7, 8], "8": [1, 2, 3, 4, 5, 7, 8], "6": [1, 2, 3, 4, 5, 7, 8, 10], "my_fonts": [1, 2, 3, 4, 5, 7, 8], "18": [1, 2, 3, 4, 5, 7, 8], "my_param": [1, 2, 3, 4, 5, 7, 8], "ax": [1, 2, 3, 4, 5, 7, 8], "labels": [1, 2, 3, 4, 5, 7, 8], "titles": [1, 2, 3, 4, 5, 7, 8], "figsiz": [1, 2, 3, 4, 5, 7, 8], "font": [1, 2, 3, 4, 5, 7, 8], "size": [1, 2, 3, 4, 5, 7, 8], "legend": [1, 2, 3, 4, 5, 7, 8], "fontsiz": [1, 2, 3, 4, 5, 7, 8], "4": [1, 2, 3, 4, 5, 7, 8, 10], "line": [1, 2, 3, 4, 5, 7, 8], "markers": [1, 2, 3, 4, 5, 7, 8], "linewidth": [1, 2, 3, 4, 5, 7, 8], "2": [1, 2, 3, 5, 7, 8, 9, 10], "xtick": [1, 2, 3, 4, 5, 7, 8], "ytick": [1, 2, 3, 4, 5, 7, 8], "rcparam": [1, 2, 3, 4, 5, 7, 8], "updat": [1, 2, 3, 4, 5, 7, 8], "my_layout": [1, 2, 3, 4, 5, 7, 8], "layout": [1, 2, 3, 4, 5, 7, 8], "auto": [1, 2, 3, 4, 5, 7, 8], "reload": [1, 2, 3, 4, 5, 7, 8], "load_ext": [1, 2, 3, 4, 5, 7, 8], "autoreload": [1, 2, 3, 4, 5, 7, 8], "move": [1, 2, 4, 6, 8], "one": 1, "step": [1, 2, 3, 4, 5, 7, 8], "forward": [1, 4, 8], "those": 1, "happend": 1, "pair": 1, "triplet": 1, "even": [1, 3, 4, 5], "more": [1, 2], "ll": [1, 2], "start": [1, 2, 3, 4, 5, 7, 8], "simpl": [1, 2, 6, 9], "basic": 1, "e": [1, 2, 4, 6, 8], "vertic": [1, 2, 3, 4, 5, 7, 8], "true": [1, 2, 3, 4, 5, 7, 8], "n": [1, 2, 3, 4, 5, 7, 8], "number": [1, 2, 4, 7, 8], "t": [1, 2, 3, 4, 5, 7, 8], "dt": [1, 2, 3, 4, 5, 7, 8], "5e2": [1, 2, 3, 4, 5], "0": [1, 2, 3, 4, 5, 7, 8], "1": [1, 2, 3, 4, 5, 7, 8, 9, 10], "period": [1, 2, 3, 4, 5, 7, 8], "m": [1, 2, 3, 4, 5, 6, 7, 8, 10], "wt": [1, 2, 3, 4, 5], "dl": [1, 2], "5": [1, 2, 3, 4, 5, 7, 8], "rt": [1, 2, 3, 4, 5, 7], "65": [1, 2], "tonic_neuron": [1, 2, 3, 4, 5, 7, 8], "tau_m": [1, 2, 3, 4, 5, 7, 8], "20": [1, 2, 3, 4, 5, 7, 8], "tau_w": [1, 2, 3, 4, 5, 7, 8], "30": [1, 2, 3, 4, 5, 7, 8], "b": [1, 2, 3, 4, 5, 7, 8, 10], "3": [1, 2, 3, 4, 5, 7, 8, 10], "v_reset": [1, 2, 3, 4, 5, 7, 8], "55": [1, 2, 3, 4, 5, 7, 8], "adapting_neuron": [1, 2, 3, 4, 5, 7, 8], "100": [1, 2, 3, 4, 5, 7, 8], "initburst_neuron": [1, 2, 3, 4, 5, 7, 8], "10": [1, 2, 3, 4, 5, 7, 8, 10], "50": [1, 2, 3, 4, 5, 7, 8], "bursting_neuron": [1, 2, 3, 4, 5, 7, 8], "46": [1, 2, 3, 4, 5, 7, 8], "irregular_neuron": [1, 2, 3, 4, 5, 7, 8], "01": [1, 2, 3, 4, 5, 7, 8, 10], "transient_neuron": [1, 2, 3, 4, 5, 7, 8], "05": [1, 2, 3, 4, 5, 7, 8], "7": [1, 2, 3, 4, 5, 7, 8, 10], "60": [1, 2, 3, 4, 5, 7, 8], "delayed_neuron": [1, 2, 3, 4, 5, 7, 8], "neuron_param": [1, 2, 3, 4, 5, 7, 8], "my_neuron": [1, 2, 3, 4, 5, 8], "paramet": [1, 2, 3, 4, 5, 6, 7, 8, 10], "def": [1, 2, 3, 4, 5, 7, 8], "update_ei": 1, "ityp": [1, 2, 4, 7], "icur": [1, 2, 4, 7], "neuron_": 1, "neuron_i": 1, "j_ei": [1, 2], "j_ie": [1, 2], "simualtor": [1, 2, 3, 4, 5, 7, 8], "h": [1, 2, 3, 4, 5, 7, 8], "nrn": [1, 2, 3, 4, 5, 7, 8], "sim": [1, 2, 3, 4, 5, 7, 8], "_": [1, 2, 3, 4, 5, 7, 8], "rang": [1, 2, 3, 4, 5, 7, 8], "background": [1, 2, 3, 4, 5, 7, 8], "nois": [1, 2, 3, 4, 5, 7, 8], "rate": [1, 2, 3, 5, 6, 8, 10], "int": [1, 2, 3, 4, 5, 8], "end": [1, 2, 3, 4, 5, 8], "9": [1, 2, 3, 4, 5], "elif": [1, 2, 4, 7], "gaussian": [1, 2, 4, 7], "std": [1, 2, 4, 7, 8], "poisson": [1, 2, 4, 7], "250": 1, "els": [1, 2, 3, 4, 5, 7, 8], "print": [1, 2, 3, 4, 5, 7], "invalid": [1, 2, 4, 7], "zip": [1, 2, 3, 4, 5, 7, 8], "ctype": [1, 2, 3, 4, 5, 7, 8], "static": [1, 2, 3, 4, 5, 6, 7, 8], "weight": [1, 2, 3, 4, 5, 7, 8], "delai": [1, 2, 3, 4, 5, 7, 8], "recurr": [1, 2, 3, 4, 5, 7, 8], "tp": [1, 2, 3, 4, 5, 7, 8], "facilit": [1, 2], "con": [1, 2, 3, 4, 5, 7, 8], "arrai": [1, 2, 3, 4, 5, 7, 8], "dly": [1, 2, 3, 4, 5, 7, 8], "random": [1, 2, 3, 4, 5, 6, 7, 8], "uniform": [1, 2, 3, 4, 5, 7, 8], "synspec": [1, 2, 3, 4, 5, 7, 8], "j": [1, 2, 3, 4, 5, 7, 8, 10], "extract": 1, "data": 1, "bint": 1, "arang": [1, 2, 3, 4, 5, 7, 8], "psth": 1, "histogram": 1, "time": [1, 2, 3, 5, 8, 10], "bin": 1, "coincid": [1, 2], "binwindow": [1, 2], "spike_train": [1, 2], "state": [1, 2], "bin_spik": [1, 2], "convolv": [1, 2], "strain": [1, 2], "ones": [1, 2, 4, 8], "same": [1, 2, 6], "deltat": [1, 2], "linspac": [1, 2, 4, 8], "21": [1, 2], "coin": [1, 2], "index": [1, 2, 4, 8], "append": [1, 2, 4, 8], "dot": [1, 2, 4, 8], "sqrt": [1, 2], "visual": [1, 2, 3, 4, 5, 7, 8], "clf": [1, 2, 3, 4, 5, 7, 8], "c": [1, 2, 3, 4, 5, 7, 8], "r": [1, 2, 3, 4, 5, 7, 8], "subplot": [1, 2, 4, 7, 8], "raster": [1, 2, 4, 7, 8], "l": [1, 2, 3, 4, 5, 7, 8], "eventplot": [1, 2, 3, 4, 5, 7, 8], "lineoffset": [1, 2, 3, 4, 5, 7, 8], "color": [1, 2, 3, 4, 5, 7, 8], "xlabel": [1, 2, 3, 4, 5, 7, 8], "xlim": [1, 2, 3, 4, 5, 7, 8], "correl": [1, 2], "plot": [1, 2, 3, 4, 5, 7, 8], "delta": [1, 2, 4], "ylabel": [1, 2, 4, 7, 8], "corr": [1, 2], "ylim": [1, 2, 4, 8], "voltag": [1, 2], "trace": [1, 2], "id": [1, 2], "plt_par": [1, 2], "range_t": [1, 2], "v_th": [1, 2], "v": [1, 2], "tight_layout": [1, 2, 3, 4, 5, 7, 8], "fig_ei": 1, "init": [1, 2, 3, 4, 5, 7], "kei": [1, 2], "excitatori": [1, 2], "inhibitori": 1, "synaps": [1, 4, 8], "influenc": 1, "fire": [1, 4, 7, 8], "doe": [1, 3, 4, 5, 7], "chang": [1, 2, 3, 4, 5, 6, 7, 8], "type": [1, 2], "shape": 1, "pattern": [1, 3, 4, 5, 8], "do": [1, 2, 3, 5], "you": [1, 2, 3, 4, 5, 7, 8], "observ": [1, 2], "If": [1, 2, 4, 8], "drive": 1, "irregular": [1, 4, 7], "manner": [1, 2, 4, 7], "But": 1, "find": [1, 2, 3, 4, 5], "make": [1, 2, 4, 8], "them": [1, 2, 4, 6, 8], "For": [1, 2, 4, 8], "straight": 1, "situat": [1, 4, 8], "ad": 1, "arbitrari": [1, 4, 8], "onli": [1, 4, 7], "update_eii": 1, "neuron_i1": 1, "neuron_i2": 1, "j_e1": 1, "j_e2": 1, "j_21": 1, "coins_al": 1, "src": [1, 3, 4, 5], "tar": [1, 3, 4, 5], "g": [1, 2, 3, 4, 5, 6, 8, 10], "i_1": 1, "i_2": 1, "popul": 1, "label": [1, 2, 3, 4, 5, 7, 8], "fig_eii": 1, "effect": 1, "each": [1, 4, 8], "anatom": 1, "co": 1, "exist": 1, "alwai": 1, "reduc": 1, "role": 1, "domin": 1, "here": [1, 2], "your": [1, 3, 4, 5], "invari": 1, "session": 2, "biolog": [2, 6], "simpler": 2, "phenomenolog": 2, "featur": 2, "call": [2, 4], "adapt": [2, 6], "leaki": 2, "integr": 2, "get": [2, 3, 4, 5], "insight": 2, "origin": [2, 4, 8], "differ": [2, 3, 5, 6, 8], "have": [2, 4, 8], "two": [2, 3, 4, 5, 7, 8], "just": 2, "three": 2, "captur": [2, 4, 8], "behavior": 2, "addit": 2, "current": 2, "inject": 2, "so": 2, "essenti": 2, "control": 2, "john": 2, "von": 2, "neumann": 2, "famous": 2, "said": 2, "four": 2, "fit": 2, "eleph": 2, "six": 2, "wiggl": 2, "its": 2, "trunk": 2, "well": 2, "let": [2, 4, 7], "": [2, 3, 4, 5, 7, 10], "see": [2, 6], "term": 2, "plausibl": 2, "g_l": 2, "e_l": 2, "70": [2, 4, 7], "40": 2, "tonic": 2, "cur_in": 2, "neuron_typ": 2, "constant": 2, "350": 2, "80": 2, "fig_nrn": 2, "120": 2, "\u03c4m": 2, "affect": [2, 3, 4, 5, 6], "\u03c4w": 2, "all": [2, 4, 8], "some": [2, 3, 4, 5, 7], "uniqu": 2, "most": [2, 4, 6], "variabl": 2, "sens": [2, 10], "qualit": [2, 3, 4, 5], "regular": [2, 4, 7], "burst": 2, "imagin": 2, "often": 2, "curv": 2, "defin": 2, "relationship": 2, "when": [2, 4, 7, 8], "either": 2, "show": [2, 6], "adapataion": 2, "done": [2, 4], "dynama": 2, "open": 2, "balckbox": 2, "frac": 2, "dv": 2, "v_": 2, "rest": 2, "delta_t": 2, "exp": 2, "rh": 2, "rw": 2, "ri": 2, "dw": 2, "w": [2, 4, 8], "sum_": 2, "f": [2, 4], "denot": [2, 6], "membran": 2, "potenti": 2, "where": 2, "sub": 2, "threshold": 2, "detail": 2, "explan": 2, "mode": 2, "refer": [2, 9], "tht": 2, "book": [2, 4], "mention": 2, "begin": 2, "synapt": [2, 6, 8, 10], "amplitud": 2, "remain": 2, "irrespect": 2, "short": 2, "increas": 2, "everi": 2, "pre": [2, 4, 7], "depress": 2, "decreas": 2, "gap": [2, 3, 4, 5], "junction": 2, "post": [2, 4, 7], "electrici": 2, "faci": 2, "depr": 2, "update_syn": 2, "c_ie": 2, "errstat": 2, "divid": 2, "ignor": 2, "dhz": 2, "len": [2, 3, 4, 5, 7, 8], "1e3": [2, 4, 7, 8], "n_src": 2, "n_tar": 2, "pair_volt_trac": 2, "fig_syn": 2, "notic": 2, "lag": 2, "compar": [2, 3, 4, 5, 6], "chemic": 2, "fix": 2, "constitut": 2, "stabl": 2, "should": 2, "long": 2, "form": [2, 4, 7], "relav": 2, "tradit": 2, "experi": [2, 3, 4, 5], "fluctuat": 2, "noisi": 2, "train": [2, 4, 8], "signal": [2, 4, 8], "transmiss": 2, "presynapt": 2, "update_inp": 2, "na": 2, "fig_inp": 2, "would": [2, 3, 4, 5, 6, 8], "computation": 2, "measur": 2, "experiment": 2, "code": [3, 4], "realiz": 3, "rhythm": [3, 4, 5], "our": 3, "simplifi": 3, "ab": [3, 4, 5], "lp": [3, 4, 5], "79": [3, 4, 5], "py": [3, 4, 5], "07": [3, 4, 5], "vd": [3, 4, 5], "04": [3, 4, 5], "nrn_label": [3, 4, 5], "ic": [3, 4, 5], "pd": [3, 4, 5], "nrn_type": [3, 4, 5], "grid": [3, 4, 5, 8], "gridspeclayout": [3, 4, 5, 8], "sign": [3, 4, 5], "wsize": [3, 4, 5, 8], "200px": [3, 4, 5, 8], "enumer": [3, 4, 5, 8], "text": [3, 4, 5, 8], "valu": [3, 4, 5, 8], "disabl": [3, 4, 5, 8], "width": [3, 4, 5, 8], "floatslid": [3, 4, 5, 8], "min": [3, 4, 5, 8], "max": [3, 4, 5, 8], "con_bar": [3, 4, 5, 8], "j_": [3, 4, 5], "s_": [3, 4, 5], "con_pylor": [3, 4, 5], "none": [3, 4, 5], "indic": [3, 4, 5], "nrn_tick": [3, 4, 5], "record": [3, 4, 5, 6, 8], "lvn": [3, 4, 5], "update_pylor": [3, 4, 5], "con_dict": [3, 4, 5, 8], "ntype": [3, 4, 5], "name": [3, 4, 5], "reshap": [3, 4, 5], "list": [3, 4, 5, 7, 8], "dtype": [3, 4, 5, 8], "float": [3, 4, 5, 8], "global": [3, 4, 5, 8], "k": [3, 4, 5, 8], "idx": [3, 4, 5, 8], "fig_pylor": [3, 4, 5], "widget_pylor": [3, 4, 5], "interactive_output": [3, 4, 5, 8], "right": [3, 4, 5], "combin": [3, 4, 5], "lv": [3, 4, 5], "nerv": [3, 4, 5], "need": [3, 4, 5, 8], "veri": [3, 4, 5], "specif": [3, 4, 5, 8], "stage": [3, 4, 5], "emerg": [3, 4, 5], "creat": [3, 4, 5], "give": [3, 4, 5, 7], "write": [3, 4, 5], "down": [3, 4, 5], "matric": [3, 4, 5], "tabl": [3, 4, 5], "snip": [3, 4, 5], "result": [3, 4, 5], "case": [3, 4, 5, 6], "drastic": [3, 4, 5], "doesn": [3, 4, 5], "seem": [3, 4, 5], "happen": [3, 4, 5], "consequ": [3, 4, 5], "solut": [3, 4, 5], "quantit": [3, 4, 5], "wai": [3, 4, 5, 6], "determin": [3, 4, 5, 10], "better": [3, 4, 5, 8], "Or": [3, 4, 5], "opinion": [3, 4, 5], "matter": [3, 4, 5], "first": [4, 6, 8], "invesig": [4, 6], "shall": [4, 6], "netowrk": [4, 6], "Then": [4, 6, 8], "rule": 4, "un": [4, 6], "supervis": [4, 6], "certain": [4, 6], "task": [4, 6], "lihao": 4, "guo": 4, "arvind": 4, "kumar": 4, "2022": 4, "tutori": 4, "inspir": 4, "wulfram": 4, "gerstner": 4, "werner": 4, "kistler": 4, "richard": 4, "naud": 4, "liam": 4, "paninski": 4, "http": 4, "neuronaldynam": 4, "epfl": 4, "ch": 4, "onlin": 4, "html": 4, "scipi": [4, 8], "debug": 4, "str": [4, 6, 10], "get_ipython": 4, "modulenotfounderror": 4, "traceback": 4, "recent": 4, "last": [4, 8], "cell": [4, 6, 8], "No": 4, "modul": 4, "download": 4, "necessari": 4, "file": 4, "o": 4, "sy": 4, "clone": 4, "respositori": 4, "user": 4, "michaelglh": 4, "repo": 4, "path": 4, "isdir": 4, "rm": 4, "rf": 4, "git": 4, "github": 4, "com": 4, "add": 4, "src_dir": 4, "insert": 4, "quiet": 4, "lib": 4, "remot": 4, "object": 4, "318": 4, "count": 4, "compress": 4, "208": 4, "total": [4, 6], "182": 4, "reus": 4, "241": 4, "109": 4, "pack": 4, "23": 4, "mib": 4, "31": 4, "96": 4, "resolv": 4, "2k": 4, "90m": 4, "0m": 4, "32m511": 4, "511": 4, "kb": 4, "31m12": 4, "mb": 4, "eta": 4, "36m0": 4, "00": 4, "32m1": 4, "31m58": 4, "25h": 4, "pylor": [4, 5], "rel": [4, 7], "exercis": [4, 7, 8], "explor": [4, 7], "rebound_neuron": [4, 7], "150": [4, 7], "54": [4, 7], "update_rate_plast": [4, 7], "j_t": [4, 7], "1e0": [4, 7, 8], "hebb": [4, 7], "1fhz": [4, 7, 8], "purpl": [4, 7], "linelength": [4, 7, 8], "amp": [4, 7], "fig_rate_plast": [4, 7], "amount": [4, 7], "vari": [4, 7], "systemat": [4, 6, 7], "obtain": [4, 7], "sai": [4, 7], "larger": [4, 7], "assum": [4, 6, 7], "hebbian": [4, 7, 8], "both": [4, 7], "might": [4, 7], "reason": [4, 7], "consid": [4, 8], "project": [4, 8], "onto": [4, 8], "target": [4, 8], "orient": [4, 8], "bar": [4, 8], "carefulli": [4, 8], "chosen": [4, 8], "sensit": [4, 8], "Such": [4, 8], "hallmark": [4, 8], "earli": [4, 8], "represent": [4, 6, 8, 10], "neocortex": [4, 8], "furthermor": [4, 8], "decod": [4, 6, 10], "manual": [4, 8], "after": [4, 8], "manipul": [4, 8], "3e2": [4, 8], "x": [4, 8], "101": [4, 8], "1e": [4, 8], "95": [4, 8], "rin": [4, 8], "stat": [4, 8], "norm": [4, 8], "pdf": [4, 8], "locat": [4, 6, 8], "sharp": [4, 8], "j_o": [4, 8], "d": [4, 8], "update_tun": [4, 8], "rdist": [4, 8], "1e2": [4, 8], "zero": [4, 8], "save": [4, 8], "y": [4, 8], "out": [4, 8], "respons": [4, 6, 8], "fig_tun": [4, 8], "widget_tun": [4, 8], "feed": [4, 8], "competit": [4, 8], "accord": [4, 8], "local": [4, 8], "activ": [4, 6, 8, 10], "out_label": [4, 8], "std_low": [4, 8], "std_high": [4, 8], "02": [4, 8], "ss": [4, 8], "11": [4, 8, 10], "25": [4, 8], "sampl": [4, 8], "update_comp": [4, 8], "outidx": [4, 8], "fals": [4, 8], "nidx": [4, 8], "sum": [4, 8], "comp": [4, 8], "collect": [4, 8], "imshow": [4, 8], "extent": [4, 8], "lower": [4, 8], "aspect": [4, 8], "tile": [4, 8], "syn": [4, 8], "colorbar": [4, 8], "scatter": [4, 8], "fig_comp": [4, 8], "15": [4, 8], "instead": [4, 8], "mannual": [4, 8], "abl": [4, 8], "now": [4, 8], "turn": [4, 8], "off": [4, 8], "respon": [4, 8], "stimuli": [4, 6, 8], "row": [4, 8], "abov": [4, 8], "suffici": [4, 8], "mani": [4, 6, 8], "choic": [4, 8], "cruve": [4, 8], "overlap": [4, 8], "wider": [4, 8], "narrow": [4, 8], "peak": [4, 8], "multi": [4, 8], "trade": [4, 8], "prinz": [6, 10], "et": 6, "al": 6, "2004": [6, 10], "pylorythm": 6, "investig": 6, "demonstr": 6, "intrins": 6, "principl": 6, "degeneraci": 6, "vast": 6, "space": 6, "configur": 6, "robust": 6, "disturb": 6, "allow": 6, "passiv": 6, "learn": [6, 8], "again": 6, "abstract": 6, "real": 6, "sj": [6, 10], "\u00f6": [6, 10], "2001": [6, 10], "distinct": 6, "lead": 6, "stimulu": 6, "interest": 6, "field": 6, "kriegeskort": [6, 10], "wei": [6, 10], "2021": [6, 10], "famou": 6, "place": [6, 10], "abbott": [6, 10], "callawai": [6, 10], "2014": [6, 10], "encod": 6, "look": 6, "video": 6, "There": 6, "comput": 6, "found": 6, "focu": 6, "neural": [6, 10], "engin": 6, "framework": 6, "nef": 6, "plai": 6, "toi": 6, "touch": 6, "plastic": [8, 10], "newtwork": 9, "introduct": 9, "content": 9, "xx": 9, "motif": 9, "astrid": 10, "dirk": 10, "bucher": 10, "ev": 10, "marder": 10, "similar": 10, "dispar": 10, "natur": 10, "12": 10, "1345": 10, "1352": 10, "decemb": 10, "doi": 10, "1038": 10, "nn1352": 10, "p": 10, "turrigiano": 10, "nelson": 10, "cooper": 10, "jointli": 10, "cortic": 10, "32": 10, "1149": 10, "1164": 10, "1016": 10, "s0896": 10, "6273": 10, "00542": 10, "nikolau": 10, "xue": 10, "xin": 10, "geometri": 10, "review": 10, "22": 10, "703": 10, "718": 10, "alison": 10, "ewen": 10, "nobel": 10, "prize": 10, "514": 10, "7521": 10, "153": 10}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"1": 0, "neuron": [0, 2, 4, 8], "motif": [0, 1], "abstract": 0, "comput": [0, 9], "content": [0, 6], "resourc": [0, 6], "function": [1, 6], "neural": [1, 9], "20min": 1, "describ": [1, 2, 3, 4, 5], "think": [1, 2, 3, 4, 5, 7, 8], "input": 2, "synaps": 2, "model": [2, 9], "fire": 2, "pattern": 2, "singl": 2, "15min": 2, "bonu": 2, "equat": 2, "5min": 2, "activ": 2, "stg": [3, 6], "circuit": [3, 6], "construct": 3, "pylor": 3, "30min": [3, 4, 5], "lab": 4, "2": [4, 6], "plastic": [4, 6, 7], "learn": [4, 9], "redund": [4, 5], "robust": [4, 5], "differ": [4, 7], "type": [4, 7], "synapt": [4, 7], "10min": [4, 7], "rate": [4, 7], "depend": [4, 7], "spike": [4, 7], "time": [4, 7], "todo": [4, 7, 8], "tune": [4, 6, 8], "curv": [4, 6, 8], "40min": [4, 8], "To": [4, 8], "do": [4, 8], "degeneraci": 5, "rule": 6, "encod": 8, "decod": 8, "biolog": 9, "network": 9, "cours": 9, "descript": 9, "outcom": 9, "modul": 9, "prerequisit": 9, "refer": 10}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"1.Neurons and motifs": [[0, "neurons-and-motifs"]], "Abstraction": [[0, "abstraction"]], "Computation": [[0, "computation"]], "Contents": [[0, "contents"], [6, "contents"]], "Resources": [[0, "resources"], [6, "resources"]], "Motif": [[1, "motif"]], "Motifs": [[1, "motifs"]], "Functional neural motifs (20min)": [[1, "functional-neural-motifs-20min"]], "Describe": [[1, "describe"], [1, "id1"], [2, "describe"], [2, "id1"], [3, "describe"], [4, "describe"], [5, "describe"]], "Think": [[1, "think"], [2, "think"], [2, "id2"], [3, "think"], [4, "think"], [4, "id1"], [4, "id3"], [5, "think"], [7, "think"], [8, "think"]], "Neuron, input, synapse": [[2, "neuron-input-synapse"]], "Neuron model": [[2, "neuron-model"]], "Firing patterns of a single neuron (15min)": [[2, "firing-patterns-of-a-single-neuron-15min"]], "Bonus": [[2, "bonus"], [2, "id3"]], "Equations": [[2, "equations"]], "Synapse model (5min)": [[2, "synapse-model-5min"]], "Input activities (5min)": [[2, "input-activities-5min"]], "STG circuit": [[3, "stg-circuit"]], "Constructing the pyloric circuit (30min)": [[3, "constructing-the-pyloric-circuit-30min"]], "Lab 2: Plasticity and learning": [[4, "lab-2-plasticity-and-learning"]], "Redundancy and robustness (30min)": [[4, "redundancy-and-robustness-30min"], [5, "redundancy-and-robustness-30min"]], "Different types of synaptic plasticities (10min)": [[4, "different-types-of-synaptic-plasticities-10min"], [7, "different-types-of-synaptic-plasticities-10min"]], "Rate dependent plasticity": [[4, "rate-dependent-plasticity"], [7, "rate-dependent-plasticity"]], "Spike timing dependent plasticity": [[4, "spike-timing-dependent-plasticity"], [7, "spike-timing-dependent-plasticity"]], "Todo": [[4, "todo"], [4, "id2"], [7, "todo"], [8, "todo"]], "Tuning curves of neurons (40min)": [[4, "tuning-curves-of-neurons-40min"], [8, "tuning-curves-of-neurons-40min"]], "To do": [[4, "to-do"], [8, "to-do"]], "Degeneracy and robustness": [[5, "degeneracy-and-robustness"]], "2.Circuit and function": [[6, "circuit-and-function"]], "STG": [[6, "stg"]], "Plasticity rules": [[6, "plasticity-rules"]], "Tuning curve": [[6, "tuning-curve"]], "Synaptic plasticity": [[7, "synaptic-plasticity"]], "Tuning curve, encoding, and decoding": [[8, "tuning-curve-encoding-and-decoding"]], "Computational Modeling of Biological Neural Networks": [[9, "computational-modeling-of-biological-neural-networks"]], "Course description": [[9, "course-description"]], "Learning outcomes": [[9, "learning-outcomes"]], "Course modules": [[9, "course-modules"]], "Prerequisites": [[9, "prerequisites"]], "References": [[10, "references"]]}, "indexentries": {}})