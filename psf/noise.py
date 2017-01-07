# -*- coding: utf-8 -*-

"""NOISE ROUTINES

This module contains methods for adding and removing noise from data.

:Author: Samuel Farrens <samuel.farrens@gmail.com>

:Version: 1.1

:Date: 04/01/2017

"""

import numpy as np


def add_noise(data, sigma=1.0, noise_type='gauss'):
    """Add noise to data

    This method adds Gaussian or Poisson noise to the input data

    Parameters
    ----------
    data : np.ndarray
        Input data array
    sigma : float, optional
        Standard deviation of the noise to be added ('gauss' only)
    noise_type : str {'gauss', 'poisson'}
        Type of noise to be added (default is 'gauss')

    Returns
    -------
    np.ndarray input data with added noise

    Raises
    ------
    ValueError
        If `noise_type` is not 'gauss' or 'poisson'

    """

    if noise_type not in ('gauss', 'poisson'):
        raise ValueError('Invalid noise type. Options are "gauss" or'
                         '"poisson"')

    if noise_type is 'gauss':
        return data + sigma * np.random.randn(*data.shape)

    elif noise_type is 'poisson':
        return data + np.random.poisson(np.abs(data))


def denoise(data, level, threshold_type='hard'):
    """Remove noise from data

    This method perfoms hard or soft thresholding on the input data

    Parameters
    ----------
    data : np.ndarray
        Input data array
    level : float
        Threshold level
    threshold_type : str {'hard', 'soft'}
        Type of noise to be added (default is 'hard')

    Returns
    -------
    np.ndarray thresholded data

    Raises
    ------
    ValueError
        If `threshold_type` is not 'hard' or 'soft'

    """

    if threshold_type not in ('hard', 'soft'):
        raise ValueError('Invalid threshold type. Options are "hard" or'
                         '"soft"')

    if threshold_type == 'soft':
        return np.sign(data) * (np.abs(data) - level) * (np.abs(data) >= level)

    else:
        return data * (np.abs(data) >= level)
