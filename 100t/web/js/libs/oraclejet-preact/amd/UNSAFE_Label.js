define(['exports', './Label-d333c754', 'preact/jsx-runtime', './hooks/UNSAFE_useFormFieldContext', 'preact', 'preact/hooks', './utils/UNSAFE_classNames', './classNames-c6cc4719', './hooks/UNSAFE_useFormContext', './hooks/UNSAFE_useComponentTheme', './utils/UNSAFE_logger', './_curry1-5cea534a', './_curry2-c02a6898', './UNSAFE_UserAssistance', './InlineHelpSource-971e057c', './hooks/UNSAFE_useTabbableMode', './hooks/UNSAFE_useTranslationBundle', './index-7d808afa', './Common', './Common/themes', './Common/themes/redwood/theme', './Common/themes/themeContract.css', 'preact/compat', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './vanilla-extract-recipes-createRuntimeFn.esm-6f6e2b8d', './UNSAFE_ComponentMessage', './ComponentMessage-fb099f4f', './PRIVATE_Message', './UNSAFE_Flex', './Flex-0a2755ad', './utils/UNSAFE_interpolations/dimensions', './utils/UNSAFE_arrayUtils', './utils/UNSAFE_size', './UNSAFE_Theme', './utils-3096e431', './utils/UNSAFE_mergeInterpolations', './_curry3-f55dd1d6', './_has-de06828b', 'module', './utils/UNSAFE_interpolations/boxalignment', './keys-72d42d0f', './utils/UNSAFE_interpolations/flexbox', './flexbox-03b175aa', './utils/UNSAFE_interpolations/flexitem', './flexitem-f4d8540e', './utils/PRIVATE_timer', './PRIVATE_Message/themes/MessageStyles.css', 'module', './MessageCloseButton-80b9e135', './UNSAFE_IconButton', './IconButton-8a163411', './UNSAFE_BaseButton', './BaseButton-ff511180', './hooks/UNSAFE_usePress', './hooks/UNSAFE_useHover', './hooks/UNSAFE_useToggle', './hooks/UNSAFE_useActive', './utils/PRIVATE_clientHints', './clientHints-fbfc14a7', './utils/UNSAFE_mergeProps', './UNSAFE_ButtonLayout', './ButtonLayout-78784b76', './UNSAFE_Text', './Text-4733b962', './UNSAFE_Text/themes/TextStyles.css', 'module', './hooks/UNSAFE_useTooltip', './hooks/UNSAFE_useId', './UNSAFE_Floating', './Floating-851238a6', './index-0f1e12db', './hooks/UNSAFE_useUser', './utils/PRIVATE_floatingUtils', './utils/PRIVATE_refUtils', './hooks/UNSAFE_useOutsideClick', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-a9754e48', './UNSAFE_Floating/themes/FloatingContract.css', './UNSAFE_Layer', './useThemeInterpolations-710109a5', './hooks/UNSAFE_useColorScheme', './hooks/UNSAFE_useScale', './utils/UNSAFE_interpolations/theme', './hooks/UNSAFE_useFocus', './hooks/UNSAFE_useTouch', './hooks/UNSAFE_useAnimation', './useAnimation-36a9a58b', './hooks/UNSAFE_useThemeInterpolations', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'module', './PRIVATE_ThemedIcons/CloseIcon', './UNSAFE_Icon', './Icon-f27746d9', './UNSAFE_Icon/themes/IconStyle.css', 'module', './MessageDetail-ed317948', './MessageFormattingUtils-1561035a', './utils/UNSAFE_getLocale', './utils/UNSAFE_stringUtils', './stringUtils-96bfcb78', './Message.types-f79bf67b', './MessageStartIcon-0eacd752', './PRIVATE_ThemedIcons/MessageConfirmationIcon', './PRIVATE_ThemedIcons/MessageErrorIcon', './PRIVATE_ThemedIcons/MessageInfoIcon', './PRIVATE_ThemedIcons/MessageWarningIcon', './MessageSummary-1a256c77', './MessageTimestamp-bb896a80', './MessageUtils-400d4d6a', './utils/UNSAFE_soundUtils', './UNSAFE_MessageBanner/themes/redwood/MessageBannerTheme', './UNSAFE_MessageBanner/themes/MessageBannerStyles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerBaseTheme.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'module', './MessagesManager-9c22a890', './PRIVATE_TransitionGroup', './hooks/UNSAFE_useMessagesContext', './UNSAFE_HiddenAccessible', './HiddenAccessible-035096e4', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './ComponentMessageContainer-1ff8855c', './hooks/UNSAFE_useInputGroupContext', './UNSAFE_Popup', './utils/PRIVATE_tabbableUtils', './_arity-d203ca27', './UNSAFE_FocusTrap', './FocusTrap-33bb474d', './hooks/PRIVATE_useAnimationStatus', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', 'module', './UNSAFE_Divider', './Divider-9dbc0f92', './UNSAFE_Divider/themes/DividerStyles.css', 'module', './CompactHelpSource-d0796baf', './PRIVATE_ThemedIcons/HelpIcon', './hooks/UNSAFE_useFocusWithin', './useFocusWithin-c30de616', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', 'css!./LabelStyles.styles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', 'module', 'module', 'module', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'module'], (function(e,s,t,o,a,n,l,i,c,r,m,F,d,A,S,h,U,_,E,u,N,T,p,g,y,M,b,I,C,B,x,w,f,k,P,V,L,R,v,H,D,W,j,G,O,z,q,J,K,Q,X,Y,Z,$,ee,se,te,oe,ae,ne,le,ie,ce,re,me,Fe,de,Ae,Se,he,Ue,_e,Ee,ue,Ne,Te,pe,ge,ye,Me,be,Ie,Ce,Be,xe,we,fe,ke,Pe,Ve,Le,Re,ve,He,De,We,je,Ge,Oe,ze,qe,Je,Ke,Qe,Xe,Ye,Ze,$e,es,ss,ts,os,as,ns,ls,is,cs,rs,ms,Fs,ds,As,Ss,hs,Us,_s,Es,us,Ns,Ts,ps,gs,ys,Ms,bs,Is,Cs,Bs,xs,ws,fs,ks,Ps,Vs,Ls,Rs,vs,Hs,Ds,Ws,js,Gs,Os,zs,qs,Js,Ks,Qs,Xs,Ys,Zs,$s,et,st,tt,ot,at,nt,lt,it,ct,rt,mt,Ft,dt,At,St,ht,Ut,_t){"use strict";e.Label=s.Label,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Label.js.map