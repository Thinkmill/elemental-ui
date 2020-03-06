/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@elemental-ui/core';

import { Icon, IconProps } from '../Icon';

export const SuperGuaranteeIcon = forwardRef<SVGSVGElement, IconProps>(
  (props: IconProps, ref) => (
    <Icon {...props}>
      <path d="M8.494,19.478 C9.621,18.782 12.23,17.519 14.901,18.782 C15.593,19.13 16.119,19.401 16.539,19.629 C17.983,20.407 18.286,20.557 21.218,20.209 C21.3124392,20.1963689 21.4084733,20.2035204 21.5,20.23 C22.1318628,20.4162083 22.6587429,20.8551545 22.956,21.443 C23.0496675,21.6510283 23.1087768,21.8729417 23.131,22.1 L23.131,22.1 L28.87,19.13 C29.6386763,18.7098158 30.5856228,18.7992848 31.262,19.356 C31.6176868,19.6562122 31.8629833,20.0665647 31.959,20.522 C32.1321485,21.4178672 31.7332777,22.3274677 30.957,22.807 L30.957,22.807 L21.913,28.309 C20.7803336,29.00333 19.4785367,29.3728009 18.15,29.377 L18.15,29.377 L9.044,29.377 L9.044,29.913 C9.04344822,31.0653896 8.10938964,31.9994482 6.957,32 L6.957,32 L2.087,32 C0.935,32 -3.19744231e-14,31.065 -3.19744231e-14,29.913 L-3.19744231e-14,29.913 L-3.19744231e-14,20.869 C0.000551778712,19.7166104 0.934610359,18.7825518 2.087,18.782 L2.087,18.782 L6.957,18.782 C7.54448536,18.7872053 8.10253854,19.0399086 8.494,19.478 Z M6.957,20.175 L2.087,20.175 C1.704,20.175 1.392,20.486 1.392,20.87 L1.392,20.87 L1.392,29.913 C1.39255172,30.2969996 1.704,30.608 2.088,30.608 L2.088,30.608 L6.958,30.608 C7.34160953,30.6074492 7.65244923,30.2966095 7.653,29.913 L7.653,29.913 L7.653,20.87 C7.65244828,20.4860004 7.341,20.175 6.957,20.175 L6.957,20.175 Z M14.31,20.045 C12.095,18.995 9.8,20.274 9.045,20.769 L9.045,20.769 L9.045,27.996 L18.15,27.996 C19.2246572,27.9925656 20.2775657,27.6929209 21.193,27.13 L21.193,27.13 L30.24,21.617 C30.5156768,21.4489029 30.6621932,21.1293386 30.609,20.81 C30.575,20.652 30.488,20.51 30.362,20.41 C30.117,20.214 29.777,20.191 29.507,20.351 L29.507,20.351 L22.589,23.957 C21.892,24.504 20.216,25.547 17.023,25.547 C16.6386098,25.547 16.327,25.2353902 16.327,24.851 C16.327,24.4666098 16.6386098,24.155 17.023,24.155 C19.726,24.155 21.11,23.342 21.621,22.945 C21.764,22.666 21.79,22.341 21.694,22.041 C21.5925284,21.8460809 21.4253126,21.6933902 21.222,21.61 C18.136,21.979 17.549,21.749 15.886,20.852 C15.458,20.622 14.972,20.358 14.31,20.045 Z M14.4357846,1.07151222 C17.5718632,-0.738806096 21.5328944,-0.216878855 24.093,2.344 C27.2145152,5.46902695 27.2145152,10.531973 24.093,13.657 C22.592,15.157 20.557,16 18.436,16 C14.8149171,16.0003206 11.6451387,13.5683089 10.7079031,10.0706196 C9.77066743,6.57293027 11.299706,2.88183054 14.4357846,1.07151222 Z M18.436,1.391 C14.7859501,1.39044777 11.8265524,4.34895013 11.8260001,7.999 C11.8254478,11.6490499 14.7839501,14.6084477 18.434,14.6090001 C20.7951683,14.6093573 22.9771684,13.3500192 24.158062,11.3053661 C25.3389555,9.26071296 25.3393367,6.74137636 24.159062,4.696366 C22.9787872,2.65135563 20.7971683,1.39135723 18.436,1.391 Z M19.135,2.783 L19.135,3.986 C20.1013914,4.22280479 20.9326419,4.83687853 21.443,5.691 L21.443,5.691 L20.233,6.386 C19.90716,5.85975188 19.3855537,5.48455508 18.783,5.343 C18.3396539,5.20611939 17.8618439,5.23345325 17.437,5.42 C17.2026222,5.55340926 17.0350065,5.7790738 16.975,6.042 C16.9319424,6.24018529 16.9776007,6.44729109 17.1,6.609 C17.34,6.932 17.612,7.012 18.515,7.246 C18.855,7.332 19.194,7.416 19.705,7.572 C20.216,7.729 21.768,8.195 21.545,10.032 C21.41,11.134 20.212,11.903 19.131,12.088 L19.131,12.088 L19.131,13.218 L17.74,13.218 L17.74,12.02 C16.7835095,11.7645716 15.9564264,11.1620843 15.42,10.33 L15.42,10.33 L16.581,9.566 C17.0623836,10.3516139 17.9459597,10.7982398 18.864,10.72 C19.48,10.63 20.118,10.205 20.16,9.875 C20.223,9.372 20.108,9.163 19.304,8.919 C18.862,8.787 18.495,8.693 18.167,8.61 C17.215,8.362 16.522,8.185 15.98,7.448 C15.624622,6.97165037 15.4892988,6.36633368 15.608,5.784 C15.7468348,5.13739384 16.1506108,4.57871005 16.721,4.244 C17.032,4.059 17.379,3.94 17.739,3.896 L17.739,3.896 L17.739,2.783 L19.135,2.783 Z" />
    </Icon>
  )
);
SuperGuaranteeIcon.displayName = 'SuperGuaranteeIcon';