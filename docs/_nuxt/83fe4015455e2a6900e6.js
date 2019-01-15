/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    148: function(e, t, n) {
      var r
      !(function(t, n) {
        'use strict'
        'object' == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function(e) {
                  if (!e.document)
                    throw new Error('jQuery requires a window with a document')
                  return n(e)
                })
          : n(t)
      })('undefined' != typeof window ? window : this, function(n, o) {
        'use strict'
        var i = [],
          a = n.document,
          s = Object.getPrototypeOf,
          l = i.slice,
          c = i.concat,
          u = i.push,
          f = i.indexOf,
          d = {},
          p = d.toString,
          h = d.hasOwnProperty,
          v = h.toString,
          g = v.call(Object),
          m = {},
          y = function(e) {
            return 'function' == typeof e && 'number' != typeof e.nodeType
          },
          x = function(e) {
            return null != e && e === e.window
          },
          b = { type: !0, src: !0, noModule: !0 }
        function w(e, t, n) {
          var r,
            o = (t = t || a).createElement('script')
          if (((o.text = e), n)) for (r in b) n[r] && (o[r] = n[r])
          t.head.appendChild(o).parentNode.removeChild(o)
        }
        function T(e) {
          return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
              ? d[p.call(e)] || 'object'
              : typeof e
        }
        var S = function(e, t) {
            return new S.fn.init(e, t)
          },
          C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        function k(e) {
          var t = !!e && 'length' in e && e.length,
            n = T(e)
          return (
            !y(e) &&
            !x(e) &&
            ('array' === n ||
              0 === t ||
              ('number' == typeof t && t > 0 && t - 1 in e))
          )
        }
        ;(S.fn = S.prototype = {
          jquery: '3.3.1',
          constructor: S,
          length: 0,
          toArray: function() {
            return l.call(this)
          },
          get: function(e) {
            return null == e
              ? l.call(this)
              : e < 0
                ? this[e + this.length]
                : this[e]
          },
          pushStack: function(e) {
            var t = S.merge(this.constructor(), e)
            return (t.prevObject = this), t
          },
          each: function(e) {
            return S.each(this, e)
          },
          map: function(e) {
            return this.pushStack(
              S.map(this, function(t, n) {
                return e.call(t, n, t)
              })
            )
          },
          slice: function() {
            return this.pushStack(l.apply(this, arguments))
          },
          first: function() {
            return this.eq(0)
          },
          last: function() {
            return this.eq(-1)
          },
          eq: function(e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0)
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
          },
          end: function() {
            return this.prevObject || this.constructor()
          },
          push: u,
          sort: i.sort,
          splice: i.splice
        }),
          (S.extend = S.fn.extend = function() {
            var e,
              t,
              n,
              r,
              o,
              i,
              a = arguments[0] || {},
              s = 1,
              l = arguments.length,
              c = !1
            for (
              'boolean' == typeof a && ((c = a), (a = arguments[s] || {}), s++),
                'object' == typeof a || y(a) || (a = {}),
                s === l && ((a = this), s--);
              s < l;
              s++
            )
              if (null != (e = arguments[s]))
                for (t in e)
                  (n = a[t]),
                    a !== (r = e[t]) &&
                      (c && r && (S.isPlainObject(r) || (o = Array.isArray(r)))
                        ? (o
                            ? ((o = !1), (i = n && Array.isArray(n) ? n : []))
                            : (i = n && S.isPlainObject(n) ? n : {}),
                          (a[t] = S.extend(c, i, r)))
                        : void 0 !== r && (a[t] = r))
            return a
          }),
          S.extend({
            expando: 'jQuery' + ('3.3.1' + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function(e) {
              throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
              var t, n
              return (
                !(!e || '[object Object]' !== p.call(e)) &&
                (!(t = s(e)) ||
                  ('function' ==
                    typeof (n = h.call(t, 'constructor') && t.constructor) &&
                    v.call(n) === g))
              )
            },
            isEmptyObject: function(e) {
              var t
              for (t in e) return !1
              return !0
            },
            globalEval: function(e) {
              w(e)
            },
            each: function(e, t) {
              var n,
                r = 0
              if (k(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
              return e
            },
            trim: function(e) {
              return null == e ? '' : (e + '').replace(C, '')
            },
            makeArray: function(e, t) {
              var n = t || []
              return (
                null != e &&
                  (k(Object(e))
                    ? S.merge(n, 'string' == typeof e ? [e] : e)
                    : u.call(n, e)),
                n
              )
            },
            inArray: function(e, t, n) {
              return null == t ? -1 : f.call(t, e, n)
            },
            merge: function(e, t) {
              for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r]
              return (e.length = o), e
            },
            grep: function(e, t, n) {
              for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                !t(e[o], o) !== a && r.push(e[o])
              return r
            },
            map: function(e, t, n) {
              var r,
                o,
                i = 0,
                a = []
              if (k(e))
                for (r = e.length; i < r; i++)
                  null != (o = t(e[i], i, n)) && a.push(o)
              else for (i in e) null != (o = t(e[i], i, n)) && a.push(o)
              return c.apply([], a)
            },
            guid: 1,
            support: m
          }),
          'function' == typeof Symbol &&
            (S.fn[Symbol.iterator] = i[Symbol.iterator]),
          S.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
              ' '
            ),
            function(e, t) {
              d['[object ' + t + ']'] = t.toLowerCase()
            }
          )
        var E = (function(e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s,
            l,
            c,
            u,
            f,
            d,
            p,
            h,
            v,
            g,
            m,
            y,
            x,
            b = 'sizzle' + 1 * new Date(),
            w = e.document,
            T = 0,
            S = 0,
            C = ae(),
            k = ae(),
            E = ae(),
            A = function(e, t) {
              return e === t && (f = !0), 0
            },
            D = {}.hasOwnProperty,
            N = [],
            L = N.pop,
            j = N.push,
            q = N.push,
            O = N.slice,
            H = function(e, t) {
              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
              return -1
            },
            M =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            R = '[\\x20\\t\\r\\n\\f]',
            I = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
            P =
              '\\[' +
              R +
              '*(' +
              I +
              ')(?:' +
              R +
              '*([*^$|!~]?=)' +
              R +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              I +
              '))|)' +
              R +
              '*\\]',
            B =
              ':(' +
              I +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              P +
              ')*)|.*)\\)|)',
            F = new RegExp(R + '+', 'g'),
            W = new RegExp(
              '^' + R + '+|((?:^|[^\\\\])(?:\\\\.)*)' + R + '+$',
              'g'
            ),
            z = new RegExp('^' + R + '*,' + R + '*'),
            $ = new RegExp('^' + R + '*([>+~]|' + R + ')' + R + '*'),
            _ = new RegExp('=' + R + '*([^\\]\'"]*?)' + R + '*\\]', 'g'),
            X = new RegExp(B),
            U = new RegExp('^' + I + '$'),
            V = {
              ID: new RegExp('^#(' + I + ')'),
              CLASS: new RegExp('^\\.(' + I + ')'),
              TAG: new RegExp('^(' + I + '|[*])'),
              ATTR: new RegExp('^' + P),
              PSEUDO: new RegExp('^' + B),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  R +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  R +
                  '*(?:([+-]|)' +
                  R +
                  '*(\\d+)|))' +
                  R +
                  '*\\)|)',
                'i'
              ),
              bool: new RegExp('^(?:' + M + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  R +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  R +
                  '*((?:-\\d)?\\d*)' +
                  R +
                  '*\\)|)(?=[^-]|$)',
                'i'
              )
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Q = /[+~]/,
            Z = new RegExp('\\\\([\\da-f]{1,6}' + R + '?|(' + R + ')|.)', 'ig'),
            ee = function(e, t, n) {
              var r = '0x' + t - 65536
              return r != r || n
                ? t
                : r < 0
                  ? String.fromCharCode(r + 65536)
                  : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320)
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function(e, t) {
              return t
                ? '\0' === e
                  ? '�'
                  : e.slice(0, -1) +
                    '\\' +
                    e.charCodeAt(e.length - 1).toString(16) +
                    ' '
                : '\\' + e
            },
            re = function() {
              d()
            },
            oe = ye(
              function(e) {
                return !0 === e.disabled && ('form' in e || 'label' in e)
              },
              { dir: 'parentNode', next: 'legend' }
            )
          try {
            q.apply((N = O.call(w.childNodes)), w.childNodes),
              N[w.childNodes.length].nodeType
          } catch (e) {
            q = {
              apply: N.length
                ? function(e, t) {
                    j.apply(e, O.call(t))
                  }
                : function(e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1
                  }
            }
          }
          function ie(e, t, r, o) {
            var i,
              s,
              c,
              u,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              T = t ? t.nodeType : 9
            if (
              ((r = r || []),
              'string' != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))
            )
              return r
            if (
              !o &&
              ((t ? t.ownerDocument || t : w) !== p && d(t), (t = t || p), v)
            ) {
              if (11 !== T && (f = J.exec(e)))
                if ((i = f[1])) {
                  if (9 === T) {
                    if (!(c = t.getElementById(i))) return r
                    if (c.id === i) return r.push(c), r
                  } else if (
                    y &&
                    (c = y.getElementById(i)) &&
                    x(t, c) &&
                    c.id === i
                  )
                    return r.push(c), r
                } else {
                  if (f[2]) return q.apply(r, t.getElementsByTagName(e)), r
                  if (
                    (i = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return q.apply(r, t.getElementsByClassName(i)), r
                }
              if (n.qsa && !E[e + ' '] && (!g || !g.test(e))) {
                if (1 !== T) (y = t), (m = e)
                else if ('object' !== t.nodeName.toLowerCase()) {
                  for (
                    (u = t.getAttribute('id'))
                      ? (u = u.replace(te, ne))
                      : t.setAttribute('id', (u = b)),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = '#' + u + ' ' + me(h[s])
                  ;(m = h.join(',')), (y = (Q.test(e) && ve(t.parentNode)) || t)
                }
                if (m)
                  try {
                    return q.apply(r, y.querySelectorAll(m)), r
                  } catch (e) {
                  } finally {
                    u === b && t.removeAttribute('id')
                  }
              }
            }
            return l(e.replace(W, '$1'), t, r, o)
          }
          function ae() {
            var e = []
            return function t(n, o) {
              return (
                e.push(n + ' ') > r.cacheLength && delete t[e.shift()],
                (t[n + ' '] = o)
              )
            }
          }
          function se(e) {
            return (e[b] = !0), e
          }
          function le(e) {
            var t = p.createElement('fieldset')
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null)
            }
          }
          function ce(e, t) {
            for (var n = e.split('|'), o = n.length; o--; )
              r.attrHandle[n[o]] = t
          }
          function ue(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex
            if (r) return r
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1
            return e ? 1 : -1
          }
          function fe(e) {
            return function(t) {
              return 'input' === t.nodeName.toLowerCase() && t.type === e
            }
          }
          function de(e) {
            return function(t) {
              var n = t.nodeName.toLowerCase()
              return ('input' === n || 'button' === n) && t.type === e
            }
          }
          function pe(e) {
            return function(t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e
            }
          }
          function he(e) {
            return se(function(t) {
              return (
                (t = +t),
                se(function(n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; )
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]))
                })
              )
            })
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e
          }
          for (t in ((n = ie.support = {}),
          (i = ie.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement
            return !!t && 'HTML' !== t.nodeName
          }),
          (d = ie.setDocument = function(e) {
            var t,
              o,
              a = e ? e.ownerDocument || e : w
            return a !== p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (v = !i(p)),
                w !== p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener('unload', re, !1)
                    : o.attachEvent && o.attachEvent('onunload', re)),
                (n.attributes = le(function(e) {
                  return (e.className = 'i'), !e.getAttribute('className')
                })),
                (n.getElementsByTagName = le(function(e) {
                  return (
                    e.appendChild(p.createComment('')),
                    !e.getElementsByTagName('*').length
                  )
                })),
                (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                (n.getById = le(function(e) {
                  return (
                    (h.appendChild(e).id = b),
                    !p.getElementsByName || !p.getElementsByName(b).length
                  )
                })),
                n.getById
                  ? ((r.filter.ID = function(e) {
                      var t = e.replace(Z, ee)
                      return function(e) {
                        return e.getAttribute('id') === t
                      }
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && v) {
                        var n = t.getElementById(e)
                        return n ? [n] : []
                      }
                    }))
                  : ((r.filter.ID = function(e) {
                      var t = e.replace(Z, ee)
                      return function(e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode('id')
                        return n && n.value === t
                      }
                    }),
                    (r.find.ID = function(e, t) {
                      if (void 0 !== t.getElementById && v) {
                        var n,
                          r,
                          o,
                          i = t.getElementById(e)
                        if (i) {
                          if ((n = i.getAttributeNode('id')) && n.value === e)
                            return [i]
                          for (
                            o = t.getElementsByName(e), r = 0;
                            (i = o[r++]);

                          )
                            if ((n = i.getAttributeNode('id')) && n.value === e)
                              return [i]
                        }
                        return []
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function(e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0
                    }
                  : function(e, t) {
                      var n,
                        r = [],
                        o = 0,
                        i = t.getElementsByTagName(e)
                      if ('*' === e) {
                        for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n)
                        return r
                      }
                      return i
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function(e, t) {
                    if (void 0 !== t.getElementsByClassName && v)
                      return t.getElementsByClassName(e)
                  }),
                (m = []),
                (g = []),
                (n.qsa = K.test(p.querySelectorAll)) &&
                  (le(function(e) {
                    ;(h.appendChild(e).innerHTML =
                      "<a id='" +
                      b +
                      "'></a><select id='" +
                      b +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push('[*^$]=' + R + '*(?:\'\'|"")'),
                      e.querySelectorAll('[selected]').length ||
                        g.push('\\[' + R + '*(?:value|' + M + ')'),
                      e.querySelectorAll('[id~=' + b + '-]').length ||
                        g.push('~='),
                      e.querySelectorAll(':checked').length ||
                        g.push(':checked'),
                      e.querySelectorAll('a#' + b + '+*').length ||
                        g.push('.#.+[+~]')
                  }),
                  le(function(e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                    var t = p.createElement('input')
                    t.setAttribute('type', 'hidden'),
                      e.appendChild(t).setAttribute('name', 'D'),
                      e.querySelectorAll('[name=d]').length &&
                        g.push('name' + R + '*[*^$|!~]?='),
                      2 !== e.querySelectorAll(':enabled').length &&
                        g.push(':enabled', ':disabled'),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(':disabled').length &&
                        g.push(':enabled', ':disabled'),
                      e.querySelectorAll('*,:x'),
                      g.push(',.*:')
                  })),
                (n.matchesSelector = K.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  le(function(e) {
                    ;(n.disconnectedMatch = y.call(e, '*')),
                      y.call(e, "[s!='']:x"),
                      m.push('!=', B)
                  }),
                (g = g.length && new RegExp(g.join('|'))),
                (m = m.length && new RegExp(m.join('|'))),
                (t = K.test(h.compareDocumentPosition)),
                (x =
                  t || K.test(h.contains)
                    ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        )
                      }
                    : function(e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0
                        return !1
                      }),
                (A = t
                  ? function(e, t) {
                      if (e === t) return (f = !0), 0
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === p || (e.ownerDocument === w && x(w, e))
                            ? -1
                            : t === p || (t.ownerDocument === w && x(w, t))
                              ? 1
                              : u
                                ? H(u, e) - H(u, t)
                                : 0
                          : 4 & r
                            ? -1
                            : 1)
                      )
                    }
                  : function(e, t) {
                      if (e === t) return (f = !0), 0
                      var n,
                        r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t]
                      if (!o || !i)
                        return e === p
                          ? -1
                          : t === p
                            ? 1
                            : o
                              ? -1
                              : i
                                ? 1
                                : u
                                  ? H(u, e) - H(u, t)
                                  : 0
                      if (o === i) return ue(e, t)
                      for (n = e; (n = n.parentNode); ) a.unshift(n)
                      for (n = t; (n = n.parentNode); ) s.unshift(n)
                      for (; a[r] === s[r]; ) r++
                      return r
                        ? ue(a[r], s[r])
                        : a[r] === w
                          ? -1
                          : s[r] === w
                            ? 1
                            : 0
                    }),
                p)
              : p
          }),
          (ie.matches = function(e, t) {
            return ie(e, null, null, t)
          }),
          (ie.matchesSelector = function(e, t) {
            if (
              ((e.ownerDocument || e) !== p && d(e),
              (t = t.replace(_, "='$1']")),
              n.matchesSelector &&
                v &&
                !E[t + ' '] &&
                (!m || !m.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var r = y.call(e, t)
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r
              } catch (e) {}
            return ie(t, p, null, [e]).length > 0
          }),
          (ie.contains = function(e, t) {
            return (e.ownerDocument || e) !== p && d(e), x(e, t)
          }),
          (ie.attr = function(e, t) {
            ;(e.ownerDocument || e) !== p && d(e)
            var o = r.attrHandle[t.toLowerCase()],
              i =
                o && D.call(r.attrHandle, t.toLowerCase())
                  ? o(e, t, !v)
                  : void 0
            return void 0 !== i
              ? i
              : n.attributes || !v
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                  ? i.value
                  : null
          }),
          (ie.escape = function(e) {
            return (e + '').replace(te, ne)
          }),
          (ie.error = function(e) {
            throw new Error('Syntax error, unrecognized expression: ' + e)
          }),
          (ie.uniqueSort = function(e) {
            var t,
              r = [],
              o = 0,
              i = 0
            if (
              ((f = !n.detectDuplicates),
              (u = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (o = r.push(i))
              for (; o--; ) e.splice(r[o], 1)
            }
            return (u = null), e
          }),
          (o = ie.getText = function(e) {
            var t,
              n = '',
              r = 0,
              i = e.nodeType
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ('string' == typeof e.textContent) return e.textContent
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
              } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; (t = e[r++]); ) n += o(t)
            return n
          }),
          ((r = ie.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
              '>': { dir: 'parentNode', first: !0 },
              ' ': { dir: 'parentNode' },
              '+': { dir: 'previousSibling', first: !0 },
              '~': { dir: 'previousSibling' }
            },
            preFilter: {
              ATTR: function(e) {
                return (
                  (e[1] = e[1].replace(Z, ee)),
                  (e[3] = (e[3] || e[4] || e[5] || '').replace(Z, ee)),
                  '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                  e.slice(0, 4)
                )
              },
              CHILD: function(e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  'nth' === e[1].slice(0, 3)
                    ? (e[3] || ie.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ('even' === e[3] || 'odd' === e[3]))),
                      (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                    : e[3] && ie.error(e[0]),
                  e
                )
              },
              PSEUDO: function(e) {
                var t,
                  n = !e[6] && e[2]
                return V.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || '')
                      : n &&
                        X.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(')', n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3))
              }
            },
            filter: {
              TAG: function(e) {
                var t = e.replace(Z, ee).toLowerCase()
                return '*' === e
                  ? function() {
                      return !0
                    }
                  : function(e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t
                    }
              },
              CLASS: function(e) {
                var t = C[e + ' ']
                return (
                  t ||
                  ((t = new RegExp('(^|' + R + ')' + e + '(' + R + '|$)')) &&
                    C(e, function(e) {
                      return t.test(
                        ('string' == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute('class')) ||
                          ''
                      )
                    }))
                )
              },
              ATTR: function(e, t, n) {
                return function(r) {
                  var o = ie.attr(r, e)
                  return null == o
                    ? '!=' === t
                    : !t ||
                        ((o += ''),
                        '=' === t
                          ? o === n
                          : '!=' === t
                            ? o !== n
                            : '^=' === t
                              ? n && 0 === o.indexOf(n)
                              : '*=' === t
                                ? n && o.indexOf(n) > -1
                                : '$=' === t
                                  ? n && o.slice(-n.length) === n
                                  : '~=' === t
                                    ? (' ' + o.replace(F, ' ') + ' ').indexOf(
                                        n
                                      ) > -1
                                    : '|=' === t &&
                                      (o === n ||
                                        o.slice(0, n.length + 1) === n + '-'))
                }
              },
              CHILD: function(e, t, n, r, o) {
                var i = 'nth' !== e.slice(0, 3),
                  a = 'last' !== e.slice(-4),
                  s = 'of-type' === t
                return 1 === r && 0 === o
                  ? function(e) {
                      return !!e.parentNode
                    }
                  : function(t, n, l) {
                      var c,
                        u,
                        f,
                        d,
                        p,
                        h,
                        v = i !== a ? 'nextSibling' : 'previousSibling',
                        g = t.parentNode,
                        m = s && t.nodeName.toLowerCase(),
                        y = !l && !s,
                        x = !1
                      if (g) {
                        if (i) {
                          for (; v; ) {
                            for (d = t; (d = d[v]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === m
                                  : 1 === d.nodeType
                              )
                                return !1
                            h = v = 'only' === e && !h && 'nextSibling'
                          }
                          return !0
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                          for (
                            x =
                              (p =
                                (c =
                                  (u =
                                    (f = (d = g)[b] || (d[b] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  T && c[1]) && c[2],
                              d = p && g.childNodes[p];
                            (d = (++p && d && d[v]) || (x = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++x && d === t) {
                              u[e] = [T, p, x]
                              break
                            }
                        } else if (
                          (y &&
                            (x = p =
                              (c =
                                (u =
                                  (f = (d = t)[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              c[1]),
                          !1 === x)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[v]) || (x = p = 0) || h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== m
                              : 1 !== d.nodeType) ||
                              !++x ||
                              (y &&
                                ((u =
                                  (f = d[b] || (d[b] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [T, x]),
                              d !== t));

                          );
                        return (x -= o) === r || (x % r == 0 && x / r >= 0)
                      }
                    }
              },
              PSEUDO: function(e, t) {
                var n,
                  o =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    ie.error('unsupported pseudo: ' + e)
                return o[b]
                  ? o(t)
                  : o.length > 1
                    ? ((n = [e, e, '', t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? se(function(e, n) {
                            for (var r, i = o(e, t), a = i.length; a--; )
                              e[(r = H(e, i[a]))] = !(n[r] = i[a])
                          })
                        : function(e) {
                            return o(e, 0, n)
                          })
                    : o
              }
            },
            pseudos: {
              not: se(function(e) {
                var t = [],
                  n = [],
                  r = s(e.replace(W, '$1'))
                return r[b]
                  ? se(function(e, t, n, o) {
                      for (var i, a = r(e, null, o, []), s = e.length; s--; )
                        (i = a[s]) && (e[s] = !(t[s] = i))
                    })
                  : function(e, o, i) {
                      return (
                        (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                      )
                    }
              }),
              has: se(function(e) {
                return function(t) {
                  return ie(e, t).length > 0
                }
              }),
              contains: se(function(e) {
                return (
                  (e = e.replace(Z, ee)),
                  function(t) {
                    return (
                      (t.textContent || t.innerText || o(t)).indexOf(e) > -1
                    )
                  }
                )
              }),
              lang: se(function(e) {
                return (
                  U.test(e || '') || ie.error('unsupported lang: ' + e),
                  (e = e.replace(Z, ee).toLowerCase()),
                  function(t) {
                    var n
                    do {
                      if (
                        (n = v
                          ? t.lang
                          : t.getAttribute('xml:lang') ||
                            t.getAttribute('lang'))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + '-')
                        )
                    } while ((t = t.parentNode) && 1 === t.nodeType)
                    return !1
                  }
                )
              }),
              target: function(t) {
                var n = e.location && e.location.hash
                return n && n.slice(1) === t.id
              },
              root: function(e) {
                return e === h
              },
              focus: function(e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                )
              },
              enabled: pe(!1),
              disabled: pe(!0),
              checked: function(e) {
                var t = e.nodeName.toLowerCase()
                return (
                  ('input' === t && !!e.checked) ||
                  ('option' === t && !!e.selected)
                )
              },
              selected: function(e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                )
              },
              empty: function(e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1
                return !0
              },
              parent: function(e) {
                return !r.pseudos.empty(e)
              },
              header: function(e) {
                return G.test(e.nodeName)
              },
              input: function(e) {
                return Y.test(e.nodeName)
              },
              button: function(e) {
                var t = e.nodeName.toLowerCase()
                return ('input' === t && 'button' === e.type) || 'button' === t
              },
              text: function(e) {
                var t
                return (
                  'input' === e.nodeName.toLowerCase() &&
                  'text' === e.type &&
                  (null == (t = e.getAttribute('type')) ||
                    'text' === t.toLowerCase())
                )
              },
              first: he(function() {
                return [0]
              }),
              last: he(function(e, t) {
                return [t - 1]
              }),
              eq: he(function(e, t, n) {
                return [n < 0 ? n + t : n]
              }),
              even: he(function(e, t) {
                for (var n = 0; n < t; n += 2) e.push(n)
                return e
              }),
              odd: he(function(e, t) {
                for (var n = 1; n < t; n += 2) e.push(n)
                return e
              }),
              lt: he(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r)
                return e
              }),
              gt: he(function(e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
                return e
              })
            }
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = fe(t)
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = de(t)
          function ge() {}
          function me(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
            return r
          }
          function ye(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              a = n && 'parentNode' === i,
              s = S++
            return t.first
              ? function(t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, o)
                  return !1
                }
              : function(t, n, l) {
                  var c,
                    u,
                    f,
                    d = [T, s]
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, l)) return !0
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((u =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t
                        else {
                          if ((c = u[i]) && c[0] === T && c[1] === s)
                            return (d[2] = c[2])
                          if (((u[i] = d), (d[2] = e(t, n, l)))) return !0
                        }
                  return !1
                }
          }
          function xe(e) {
            return e.length > 1
              ? function(t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1
                  return !0
                }
              : e[0]
          }
          function be(e, t, n, r, o) {
            for (var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
              (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(s)))
            return a
          }
          function we(e, t, n, r, o, i) {
            return (
              r && !r[b] && (r = we(r)),
              o && !o[b] && (o = we(o, i)),
              se(function(i, a, s, l) {
                var c,
                  u,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  v =
                    i ||
                    (function(e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) ie(e, t[r], n)
                      return n
                    })(t || '*', s.nodeType ? [s] : s, []),
                  g = !e || (!i && t) ? v : be(v, d, e, s, l),
                  m = n ? (o || (i ? e : h || r) ? [] : a) : g
                if ((n && n(g, m, s, l), r))
                  for (c = be(m, p), r(c, [], s, l), u = c.length; u--; )
                    (f = c[u]) && (m[p[u]] = !(g[p[u]] = f))
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (c = [], u = m.length; u--; )
                        (f = m[u]) && c.push((g[u] = f))
                      o(null, (m = []), c, l)
                    }
                    for (u = m.length; u--; )
                      (f = m[u]) &&
                        (c = o ? H(i, f) : d[u]) > -1 &&
                        (i[c] = !(a[c] = f))
                  }
                } else (m = be(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, l) : q.apply(a, m)
              })
            )
          }
          function Te(e) {
            for (
              var t,
                n,
                o,
                i = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[' '],
                l = a ? 1 : 0,
                u = ye(
                  function(e) {
                    return e === t
                  },
                  s,
                  !0
                ),
                f = ye(
                  function(e) {
                    return H(t, e) > -1
                  },
                  s,
                  !0
                ),
                d = [
                  function(e, n, r) {
                    var o =
                      (!a && (r || n !== c)) ||
                      ((t = n).nodeType ? u(e, n, r) : f(e, n, r))
                    return (t = null), o
                  }
                ];
              l < i;
              l++
            )
              if ((n = r.relative[e[l].type])) d = [ye(xe(d), n)]
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                  for (o = ++l; o < i && !r.relative[e[o].type]; o++);
                  return we(
                    l > 1 && xe(d),
                    l > 1 &&
                      me(
                        e
                          .slice(0, l - 1)
                          .concat({ value: ' ' === e[l - 2].type ? '*' : '' })
                      ).replace(W, '$1'),
                    n,
                    l < o && Te(e.slice(l, o)),
                    o < i && Te((e = e.slice(o))),
                    o < i && me(e)
                  )
                }
                d.push(n)
              }
            return xe(d)
          }
          return (
            (ge.prototype = r.filters = r.pseudos),
            (r.setFilters = new ge()),
            (a = ie.tokenize = function(e, t) {
              var n,
                o,
                i,
                a,
                s,
                l,
                c,
                u = k[e + ' ']
              if (u) return t ? 0 : u.slice(0)
              for (s = e, l = [], c = r.preFilter; s; ) {
                for (a in ((n && !(o = z.exec(s))) ||
                  (o && (s = s.slice(o[0].length) || s), l.push((i = []))),
                (n = !1),
                (o = $.exec(s)) &&
                  ((n = o.shift()),
                  i.push({ value: n, type: o[0].replace(W, ' ') }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(o = V[a].exec(s)) ||
                    (c[a] && !(o = c[a](o))) ||
                    ((n = o.shift()),
                    i.push({ value: n, type: a, matches: o }),
                    (s = s.slice(n.length)))
                if (!n) break
              }
              return t ? s.length : s ? ie.error(e) : k(e, l).slice(0)
            }),
            (s = ie.compile = function(e, t) {
              var n,
                o = [],
                i = [],
                s = E[e + ' ']
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = Te(t[n]))[b] ? o.push(s) : i.push(s)
                ;(s = E(
                  e,
                  (function(e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      i = function(i, a, s, l, u) {
                        var f,
                          h,
                          g,
                          m = 0,
                          y = '0',
                          x = i && [],
                          b = [],
                          w = c,
                          S = i || (o && r.find.TAG('*', u)),
                          C = (T += null == w ? 1 : Math.random() || 0.1),
                          k = S.length
                        for (
                          u && (c = a === p || a || u);
                          y !== k && null != (f = S[y]);
                          y++
                        ) {
                          if (o && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument === p || (d(f), (s = !v));
                              (g = e[h++]);

                            )
                              if (g(f, a || p, s)) {
                                l.push(f)
                                break
                              }
                            u && (T = C)
                          }
                          n && ((f = !g && f) && m--, i && x.push(f))
                        }
                        if (((m += y), n && y !== m)) {
                          for (h = 0; (g = t[h++]); ) g(x, b, a, s)
                          if (i) {
                            if (m > 0)
                              for (; y--; ) x[y] || b[y] || (b[y] = L.call(l))
                            b = be(b)
                          }
                          q.apply(l, b),
                            u &&
                              !i &&
                              b.length > 0 &&
                              m + t.length > 1 &&
                              ie.uniqueSort(l)
                        }
                        return u && ((T = C), (c = w)), x
                      }
                    return n ? se(i) : i
                  })(i, o)
                )).selector = e
              }
              return s
            }),
            (l = ie.select = function(e, t, n, o) {
              var i,
                l,
                c,
                u,
                f,
                d = 'function' == typeof e && e,
                p = !o && a((e = d.selector || e))
              if (((n = n || []), 1 === p.length)) {
                if (
                  (l = p[0] = p[0].slice(0)).length > 2 &&
                  'ID' === (c = l[0]).type &&
                  9 === t.nodeType &&
                  v &&
                  r.relative[l[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(c.matches[0].replace(Z, ee), t) || [])[0])
                  )
                    return n
                  d && (t = t.parentNode), (e = e.slice(l.shift().value.length))
                }
                for (
                  i = V.needsContext.test(e) ? 0 : l.length;
                  i-- && ((c = l[i]), !r.relative[(u = c.type)]);

                )
                  if (
                    (f = r.find[u]) &&
                    (o = f(
                      c.matches[0].replace(Z, ee),
                      (Q.test(l[0].type) && ve(t.parentNode)) || t
                    ))
                  ) {
                    if ((l.splice(i, 1), !(e = o.length && me(l))))
                      return q.apply(n, o), n
                    break
                  }
              }
              return (
                (d || s(e, p))(
                  o,
                  t,
                  !v,
                  n,
                  !t || (Q.test(e) && ve(t.parentNode)) || t
                ),
                n
              )
            }),
            (n.sortStable =
              b
                .split('')
                .sort(A)
                .join('') === b),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = le(function(e) {
              return 1 & e.compareDocumentPosition(p.createElement('fieldset'))
            })),
            le(function(e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                '#' === e.firstChild.getAttribute('href')
              )
            }) ||
              ce('type|href|height|width', function(e, t, n) {
                if (!n)
                  return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
              }),
            (n.attributes &&
              le(function(e) {
                return (
                  (e.innerHTML = '<input/>'),
                  e.firstChild.setAttribute('value', ''),
                  '' === e.firstChild.getAttribute('value')
                )
              })) ||
              ce('value', function(e, t, n) {
                if (!n && 'input' === e.nodeName.toLowerCase())
                  return e.defaultValue
              }),
            le(function(e) {
              return null == e.getAttribute('disabled')
            }) ||
              ce(M, function(e, t, n) {
                var r
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null
              }),
            ie
          )
        })(n)
        ;(S.find = E),
          (S.expr = E.selectors),
          (S.expr[':'] = S.expr.pseudos),
          (S.uniqueSort = S.unique = E.uniqueSort),
          (S.text = E.getText),
          (S.isXMLDoc = E.isXML),
          (S.contains = E.contains),
          (S.escapeSelector = E.escape)
        var A = function(e, t, n) {
            for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (o && S(e).is(n)) break
                r.push(e)
              }
            return r
          },
          D = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e)
            return n
          },
          N = S.expr.match.needsContext
        function L(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        function q(e, t, n) {
          return y(t)
            ? S.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
              })
            : t.nodeType
              ? S.grep(e, function(e) {
                  return (e === t) !== n
                })
              : 'string' != typeof t
                ? S.grep(e, function(e) {
                    return f.call(t, e) > -1 !== n
                  })
                : S.filter(t, e, n)
        }
        ;(S.filter = function(e, t, n) {
          var r = t[0]
          return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, e)
                ? [r]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function(e) {
                    return 1 === e.nodeType
                  })
                )
          )
        }),
          S.fn.extend({
            find: function(e) {
              var t,
                n,
                r = this.length,
                o = this
              if ('string' != typeof e)
                return this.pushStack(
                  S(e).filter(function() {
                    for (t = 0; t < r; t++)
                      if (S.contains(o[t], this)) return !0
                  })
                )
              for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, o[t], n)
              return r > 1 ? S.uniqueSort(n) : n
            },
            filter: function(e) {
              return this.pushStack(q(this, e || [], !1))
            },
            not: function(e) {
              return this.pushStack(q(this, e || [], !0))
            },
            is: function(e) {
              return !!q(
                this,
                'string' == typeof e && N.test(e) ? S(e) : e || [],
                !1
              ).length
            }
          })
        var O,
          H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
        ;((S.fn.init = function(e, t, n) {
          var r, o
          if (!e) return this
          if (((n = n || O), 'string' == typeof e)) {
            if (
              !(r =
                '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : H.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery
                ? (t || n).find(e)
                : this.constructor(t).find(e)
            if (r[1]) {
              if (
                ((t = t instanceof S ? t[0] : t),
                S.merge(
                  this,
                  S.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : a,
                    !0
                  )
                ),
                j.test(r[1]) && S.isPlainObject(t))
              )
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
              return this
            }
            return (
              (o = a.getElementById(r[2])) &&
                ((this[0] = o), (this.length = 1)),
              this
            )
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this)
        }).prototype = S.fn),
          (O = S(a))
        var M = /^(?:parents|prev(?:Until|All))/,
          R = { children: !0, contents: !0, next: !0, prev: !0 }
        function I(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e
        }
        S.fn.extend({
          has: function(e) {
            var t = S(e, this),
              n = t.length
            return this.filter(function() {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
            })
          },
          closest: function(e, t) {
            var n,
              r = 0,
              o = this.length,
              i = [],
              a = 'string' != typeof e && S(e)
            if (!N.test(e))
              for (; r < o; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a
                      ? a.index(n) > -1
                      : 1 === n.nodeType && S.find.matchesSelector(n, e))
                  ) {
                    i.push(n)
                    break
                  }
            return this.pushStack(i.length > 1 ? S.uniqueSort(i) : i)
          },
          index: function(e) {
            return e
              ? 'string' == typeof e
                ? f.call(S(e), this[0])
                : f.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1
          },
          add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
          },
          addBack: function(e) {
            return this.add(
              null == e ? this.prevObject : this.prevObject.filter(e)
            )
          }
        }),
          S.each(
            {
              parent: function(e) {
                var t = e.parentNode
                return t && 11 !== t.nodeType ? t : null
              },
              parents: function(e) {
                return A(e, 'parentNode')
              },
              parentsUntil: function(e, t, n) {
                return A(e, 'parentNode', n)
              },
              next: function(e) {
                return I(e, 'nextSibling')
              },
              prev: function(e) {
                return I(e, 'previousSibling')
              },
              nextAll: function(e) {
                return A(e, 'nextSibling')
              },
              prevAll: function(e) {
                return A(e, 'previousSibling')
              },
              nextUntil: function(e, t, n) {
                return A(e, 'nextSibling', n)
              },
              prevUntil: function(e, t, n) {
                return A(e, 'previousSibling', n)
              },
              siblings: function(e) {
                return D((e.parentNode || {}).firstChild, e)
              },
              children: function(e) {
                return D(e.firstChild)
              },
              contents: function(e) {
                return L(e, 'iframe')
                  ? e.contentDocument
                  : (L(e, 'template') && (e = e.content || e),
                    S.merge([], e.childNodes))
              }
            },
            function(e, t) {
              S.fn[e] = function(n, r) {
                var o = S.map(this, t, n)
                return (
                  'Until' !== e.slice(-5) && (r = n),
                  r && 'string' == typeof r && (o = S.filter(r, o)),
                  this.length > 1 &&
                    (R[e] || S.uniqueSort(o), M.test(e) && o.reverse()),
                  this.pushStack(o)
                )
              }
            }
          )
        var P = /[^\x20\t\r\n\f]+/g
        function B(e) {
          return e
        }
        function F(e) {
          throw e
        }
        function W(e, t, n, r) {
          var o
          try {
            e && y((o = e.promise))
              ? o
                  .call(e)
                  .done(t)
                  .fail(n)
              : e && y((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r))
          } catch (e) {
            n.apply(void 0, [e])
          }
        }
        ;(S.Callbacks = function(e) {
          e =
            'string' == typeof e
              ? (function(e) {
                  var t = {}
                  return (
                    S.each(e.match(P) || [], function(e, n) {
                      t[n] = !0
                    }),
                    t
                  )
                })(e)
              : S.extend({}, e)
          var t,
            n,
            r,
            o,
            i = [],
            a = [],
            s = -1,
            l = function() {
              for (o = o || e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < i.length; )
                  !1 === i[s].apply(n[0], n[1]) &&
                    e.stopOnFalse &&
                    ((s = i.length), (n = !1))
              e.memory || (n = !1), (t = !1), o && (i = n ? [] : '')
            },
            c = {
              add: function() {
                return (
                  i &&
                    (n && !t && ((s = i.length - 1), a.push(n)),
                    (function t(n) {
                      S.each(n, function(n, r) {
                        y(r)
                          ? (e.unique && c.has(r)) || i.push(r)
                          : r && r.length && 'string' !== T(r) && t(r)
                      })
                    })(arguments),
                    n && !t && l()),
                  this
                )
              },
              remove: function() {
                return (
                  S.each(arguments, function(e, t) {
                    for (var n; (n = S.inArray(t, i, n)) > -1; )
                      i.splice(n, 1), n <= s && s--
                  }),
                  this
                )
              },
              has: function(e) {
                return e ? S.inArray(e, i) > -1 : i.length > 0
              },
              empty: function() {
                return i && (i = []), this
              },
              disable: function() {
                return (o = a = []), (i = n = ''), this
              },
              disabled: function() {
                return !i
              },
              lock: function() {
                return (o = a = []), n || t || (i = n = ''), this
              },
              locked: function() {
                return !!o
              },
              fireWith: function(e, n) {
                return (
                  o ||
                    ((n = [e, (n = n || []).slice ? n.slice() : n]),
                    a.push(n),
                    t || l()),
                  this
                )
              },
              fire: function() {
                return c.fireWith(this, arguments), this
              },
              fired: function() {
                return !!r
              }
            }
          return c
        }),
          S.extend({
            Deferred: function(e) {
              var t = [
                  [
                    'notify',
                    'progress',
                    S.Callbacks('memory'),
                    S.Callbacks('memory'),
                    2
                  ],
                  [
                    'resolve',
                    'done',
                    S.Callbacks('once memory'),
                    S.Callbacks('once memory'),
                    0,
                    'resolved'
                  ],
                  [
                    'reject',
                    'fail',
                    S.Callbacks('once memory'),
                    S.Callbacks('once memory'),
                    1,
                    'rejected'
                  ]
                ],
                r = 'pending',
                o = {
                  state: function() {
                    return r
                  },
                  always: function() {
                    return i.done(arguments).fail(arguments), this
                  },
                  catch: function(e) {
                    return o.then(null, e)
                  },
                  pipe: function() {
                    var e = arguments
                    return S.Deferred(function(n) {
                      S.each(t, function(t, r) {
                        var o = y(e[r[4]]) && e[r[4]]
                        i[r[1]](function() {
                          var e = o && o.apply(this, arguments)
                          e && y(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + 'With'](this, o ? [e] : arguments)
                        })
                      }),
                        (e = null)
                    }).promise()
                  },
                  then: function(e, r, o) {
                    var i = 0
                    function a(e, t, r, o) {
                      return function() {
                        var s = this,
                          l = arguments,
                          c = function() {
                            var n, c
                            if (!(e < i)) {
                              if ((n = r.apply(s, l)) === t.promise())
                                throw new TypeError('Thenable self-resolution')
                              ;(c =
                                n &&
                                ('object' == typeof n ||
                                  'function' == typeof n) &&
                                n.then),
                                y(c)
                                  ? o
                                    ? c.call(n, a(i, t, B, o), a(i, t, F, o))
                                    : (i++,
                                      c.call(
                                        n,
                                        a(i, t, B, o),
                                        a(i, t, F, o),
                                        a(i, t, B, t.notifyWith)
                                      ))
                                  : (r !== B && ((s = void 0), (l = [n])),
                                    (o || t.resolveWith)(s, l))
                            }
                          },
                          u = o
                            ? c
                            : function() {
                                try {
                                  c()
                                } catch (n) {
                                  S.Deferred.exceptionHook &&
                                    S.Deferred.exceptionHook(n, u.stackTrace),
                                    e + 1 >= i &&
                                      (r !== F && ((s = void 0), (l = [n])),
                                      t.rejectWith(s, l))
                                }
                              }
                        e
                          ? u()
                          : (S.Deferred.getStackHook &&
                              (u.stackTrace = S.Deferred.getStackHook()),
                            n.setTimeout(u))
                      }
                    }
                    return S.Deferred(function(n) {
                      t[0][3].add(a(0, n, y(o) ? o : B, n.notifyWith)),
                        t[1][3].add(a(0, n, y(e) ? e : B)),
                        t[2][3].add(a(0, n, y(r) ? r : F))
                    }).promise()
                  },
                  promise: function(e) {
                    return null != e ? S.extend(e, o) : o
                  }
                },
                i = {}
              return (
                S.each(t, function(e, n) {
                  var a = n[2],
                    s = n[5]
                  ;(o[n[1]] = a.add),
                    s &&
                      a.add(
                        function() {
                          r = s
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(n[3].fire),
                    (i[n[0]] = function() {
                      return (
                        i[n[0] + 'With'](this === i ? void 0 : this, arguments),
                        this
                      )
                    }),
                    (i[n[0] + 'With'] = a.fireWith)
                }),
                o.promise(i),
                e && e.call(i, i),
                i
              )
            },
            when: function(e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                o = l.call(arguments),
                i = S.Deferred(),
                a = function(e) {
                  return function(n) {
                    ;(r[e] = this),
                      (o[e] = arguments.length > 1 ? l.call(arguments) : n),
                      --t || i.resolveWith(r, o)
                  }
                }
              if (
                t <= 1 &&
                (W(e, i.done(a(n)).resolve, i.reject, !t),
                'pending' === i.state() || y(o[n] && o[n].then))
              )
                return i.then()
              for (; n--; ) W(o[n], a(n), i.reject)
              return i.promise()
            }
          })
        var z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
        ;(S.Deferred.exceptionHook = function(e, t) {
          n.console &&
            n.console.warn &&
            e &&
            z.test(e.name) &&
            n.console.warn(
              'jQuery.Deferred exception: ' + e.message,
              e.stack,
              t
            )
        }),
          (S.readyException = function(e) {
            n.setTimeout(function() {
              throw e
            })
          })
        var $ = S.Deferred()
        function _() {
          a.removeEventListener('DOMContentLoaded', _),
            n.removeEventListener('load', _),
            S.ready()
        }
        ;(S.fn.ready = function(e) {
          return (
            $.then(e).catch(function(e) {
              S.readyException(e)
            }),
            this
          )
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
              ;(!0 === e ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0),
                (!0 !== e && --S.readyWait > 0) || $.resolveWith(a, [S]))
            }
          }),
          (S.ready.then = $.then),
          'complete' === a.readyState ||
          ('loading' !== a.readyState && !a.documentElement.doScroll)
            ? n.setTimeout(S.ready)
            : (a.addEventListener('DOMContentLoaded', _),
              n.addEventListener('load', _))
        var X = function(e, t, n, r, o, i, a) {
            var s = 0,
              l = e.length,
              c = null == n
            if ('object' === T(n))
              for (s in ((o = !0), n)) X(e, t, s, n[s], !0, i, a)
            else if (
              void 0 !== r &&
              ((o = !0),
              y(r) || (a = !0),
              c &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((c = t),
                    (t = function(e, t, n) {
                      return c.call(S(e), n)
                    }))),
              t)
            )
              for (; s < l; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : i
          },
          U = /^-ms-/,
          V = /-([a-z])/g
        function Y(e, t) {
          return t.toUpperCase()
        }
        function G(e) {
          return e.replace(U, 'ms-').replace(V, Y)
        }
        var K = function(e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }
        function J() {
          this.expando = S.expando + J.uid++
        }
        ;(J.uid = 1),
          (J.prototype = {
            cache: function(e) {
              var t = e[this.expando]
              return (
                t ||
                  ((t = {}),
                  K(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, {
                          value: t,
                          configurable: !0
                        }))),
                t
              )
            },
            set: function(e, t, n) {
              var r,
                o = this.cache(e)
              if ('string' == typeof t) o[G(t)] = n
              else for (r in t) o[G(r)] = t[r]
              return o
            },
            get: function(e, t) {
              return void 0 === t
                ? this.cache(e)
                : e[this.expando] && e[this.expando][G(t)]
            },
            access: function(e, t, n) {
              return void 0 === t || (t && 'string' == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function(e, t) {
              var n,
                r = e[this.expando]
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t)
                    ? t.map(G)
                    : (t = G(t)) in r
                      ? [t]
                      : t.match(P) || []).length
                  for (; n--; ) delete r[t[n]]
                }
                ;(void 0 === t || S.isEmptyObject(r)) &&
                  (e.nodeType
                    ? (e[this.expando] = void 0)
                    : delete e[this.expando])
              }
            },
            hasData: function(e) {
              var t = e[this.expando]
              return void 0 !== t && !S.isEmptyObject(t)
            }
          })
        var Q = new J(),
          Z = new J(),
          ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          te = /[A-Z]/g
        function ne(e, t, n) {
          var r
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
              'string' == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function(e) {
                  return (
                    'true' === e ||
                    ('false' !== e &&
                      ('null' === e
                        ? null
                        : e === +e + ''
                          ? +e
                          : ee.test(e)
                            ? JSON.parse(e)
                            : e))
                  )
                })(n)
              } catch (e) {}
              Z.set(e, t, n)
            } else n = void 0
          return n
        }
        S.extend({
          hasData: function(e) {
            return Z.hasData(e) || Q.hasData(e)
          },
          data: function(e, t, n) {
            return Z.access(e, t, n)
          },
          removeData: function(e, t) {
            Z.remove(e, t)
          },
          _data: function(e, t, n) {
            return Q.access(e, t, n)
          },
          _removeData: function(e, t) {
            Q.remove(e, t)
          }
        }),
          S.fn.extend({
            data: function(e, t) {
              var n,
                r,
                o,
                i = this[0],
                a = i && i.attributes
              if (void 0 === e) {
                if (
                  this.length &&
                  ((o = Z.get(i)),
                  1 === i.nodeType && !Q.get(i, 'hasDataAttrs'))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      0 === (r = a[n].name).indexOf('data-') &&
                      ((r = G(r.slice(5))), ne(i, r, o[r]))
                  Q.set(i, 'hasDataAttrs', !0)
                }
                return o
              }
              return 'object' == typeof e
                ? this.each(function() {
                    Z.set(this, e)
                  })
                : X(
                    this,
                    function(t) {
                      var n
                      if (i && void 0 === t)
                        return void 0 !== (n = Z.get(i, e))
                          ? n
                          : void 0 !== (n = ne(i, e))
                            ? n
                            : void 0
                      this.each(function() {
                        Z.set(this, e, t)
                      })
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  )
            },
            removeData: function(e) {
              return this.each(function() {
                Z.remove(this, e)
              })
            }
          }),
          S.extend({
            queue: function(e, t, n) {
              var r
              if (e)
                return (
                  (t = (t || 'fx') + 'queue'),
                  (r = Q.get(e, t)),
                  n &&
                    (!r || Array.isArray(n)
                      ? (r = Q.access(e, t, S.makeArray(n)))
                      : r.push(n)),
                  r || []
                )
            },
            dequeue: function(e, t) {
              t = t || 'fx'
              var n = S.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = S._queueHooks(e, t)
              'inprogress' === o && ((o = n.shift()), r--),
                o &&
                  ('fx' === t && n.unshift('inprogress'),
                  delete i.stop,
                  o.call(
                    e,
                    function() {
                      S.dequeue(e, t)
                    },
                    i
                  )),
                !r && i && i.empty.fire()
            },
            _queueHooks: function(e, t) {
              var n = t + 'queueHooks'
              return (
                Q.get(e, n) ||
                Q.access(e, n, {
                  empty: S.Callbacks('once memory').add(function() {
                    Q.remove(e, [t + 'queue', n])
                  })
                })
              )
            }
          }),
          S.fn.extend({
            queue: function(e, t) {
              var n = 2
              return (
                'string' != typeof e && ((t = e), (e = 'fx'), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                    ? this
                    : this.each(function() {
                        var n = S.queue(this, e, t)
                        S._queueHooks(this, e),
                          'fx' === e &&
                            'inprogress' !== n[0] &&
                            S.dequeue(this, e)
                      })
              )
            },
            dequeue: function(e) {
              return this.each(function() {
                S.dequeue(this, e)
              })
            },
            clearQueue: function(e) {
              return this.queue(e || 'fx', [])
            },
            promise: function(e, t) {
              var n,
                r = 1,
                o = S.Deferred(),
                i = this,
                a = this.length,
                s = function() {
                  --r || o.resolveWith(i, [i])
                }
              for (
                'string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx';
                a--;

              )
                (n = Q.get(i[a], e + 'queueHooks')) &&
                  n.empty &&
                  (r++, n.empty.add(s))
              return s(), o.promise(t)
            }
          })
        var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          oe = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
          ie = ['Top', 'Right', 'Bottom', 'Left'],
          ae = function(e, t) {
            return (
              'none' === (e = t || e).style.display ||
              ('' === e.style.display &&
                S.contains(e.ownerDocument, e) &&
                'none' === S.css(e, 'display'))
            )
          },
          se = function(e, t, n, r) {
            var o,
              i,
              a = {}
            for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i])
            for (i in ((o = n.apply(e, r || [])), t)) e.style[i] = a[i]
            return o
          }
        function le(e, t, n, r) {
          var o,
            i,
            a = 20,
            s = r
              ? function() {
                  return r.cur()
                }
              : function() {
                  return S.css(e, t, '')
                },
            l = s(),
            c = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
            u = (S.cssNumber[t] || ('px' !== c && +l)) && oe.exec(S.css(e, t))
          if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; a--; )
              S.style(e, t, u + c),
                (1 - i) * (1 - (i = s() / l || 0.5)) <= 0 && (a = 0),
                (u /= i)
            ;(u *= 2), S.style(e, t, u + c), (n = n || [])
          }
          return (
            n &&
              ((u = +u || +l || 0),
              (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = c), (r.start = u), (r.end = o))),
            o
          )
        }
        var ce = {}
        function ue(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            o = ce[r]
          return (
            o ||
            ((t = n.body.appendChild(n.createElement(r))),
            (o = S.css(t, 'display')),
            t.parentNode.removeChild(t),
            'none' === o && (o = 'block'),
            (ce[r] = o),
            o)
          )
        }
        function fe(e, t) {
          for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
            (r = e[i]).style &&
              ((n = r.style.display),
              t
                ? ('none' === n &&
                    ((o[i] = Q.get(r, 'display') || null),
                    o[i] || (r.style.display = '')),
                  '' === r.style.display && ae(r) && (o[i] = ue(r)))
                : 'none' !== n && ((o[i] = 'none'), Q.set(r, 'display', n)))
          for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i])
          return e
        }
        S.fn.extend({
          show: function() {
            return fe(this, !0)
          },
          hide: function() {
            return fe(this)
          },
          toggle: function(e) {
            return 'boolean' == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function() {
                  ae(this) ? S(this).show() : S(this).hide()
                })
          }
        })
        var de = /^(?:checkbox|radio)$/i,
          pe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
          he = /^$|^module$|\/(?:java|ecma)script/i,
          ve = {
            option: [1, "<select multiple='multiple'>", '</select>'],
            thead: [1, '<table>', '</table>'],
            col: [2, '<table><colgroup>', '</colgroup></table>'],
            tr: [2, '<table><tbody>', '</tbody></table>'],
            td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
            _default: [0, '', '']
          }
        function ge(e, t) {
          var n
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || '*')
                  : []),
            void 0 === t || (t && L(e, t)) ? S.merge([e], n) : n
          )
        }
        function me(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], 'globalEval', !t || Q.get(t[n], 'globalEval'))
        }
        ;(ve.optgroup = ve.option),
          (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
          (ve.th = ve.td)
        var ye,
          xe,
          be = /<|&#?\w+;/
        function we(e, t, n, r, o) {
          for (
            var i,
              a,
              s,
              l,
              c,
              u,
              f = t.createDocumentFragment(),
              d = [],
              p = 0,
              h = e.length;
            p < h;
            p++
          )
            if ((i = e[p]) || 0 === i)
              if ('object' === T(i)) S.merge(d, i.nodeType ? [i] : i)
              else if (be.test(i)) {
                for (
                  a = a || f.appendChild(t.createElement('div')),
                    s = (pe.exec(i) || ['', ''])[1].toLowerCase(),
                    l = ve[s] || ve._default,
                    a.innerHTML = l[1] + S.htmlPrefilter(i) + l[2],
                    u = l[0];
                  u--;

                )
                  a = a.lastChild
                S.merge(d, a.childNodes), ((a = f.firstChild).textContent = '')
              } else d.push(t.createTextNode(i))
          for (f.textContent = '', p = 0; (i = d[p++]); )
            if (r && S.inArray(i, r) > -1) o && o.push(i)
            else if (
              ((c = S.contains(i.ownerDocument, i)),
              (a = ge(f.appendChild(i), 'script')),
              c && me(a),
              n)
            )
              for (u = 0; (i = a[u++]); ) he.test(i.type || '') && n.push(i)
          return f
        }
        ;(ye = a.createDocumentFragment().appendChild(a.createElement('div'))),
          (xe = a.createElement('input')).setAttribute('type', 'radio'),
          xe.setAttribute('checked', 'checked'),
          xe.setAttribute('name', 't'),
          ye.appendChild(xe),
          (m.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (ye.innerHTML = '<textarea>x</textarea>'),
          (m.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue)
        var Te = a.documentElement,
          Se = /^key/,
          Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
          ke = /^([^.]*)(?:\.(.+)|)/
        function Ee() {
          return !0
        }
        function Ae() {
          return !1
        }
        function De() {
          try {
            return a.activeElement
          } catch (e) {}
        }
        function Ne(e, t, n, r, o, i) {
          var a, s
          if ('object' == typeof t) {
            for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
              Ne(e, s, n, r, t[s], i)
            return e
          }
          if (
            (null == r && null == o
              ? ((o = n), (r = n = void 0))
              : null == o &&
                ('string' == typeof n
                  ? ((o = r), (r = void 0))
                  : ((o = r), (r = n), (n = void 0))),
            !1 === o)
          )
            o = Ae
          else if (!o) return e
          return (
            1 === i &&
              ((a = o),
              ((o = function(e) {
                return S().off(e), a.apply(this, arguments)
              }).guid = a.guid || (a.guid = S.guid++))),
            e.each(function() {
              S.event.add(this, t, o, r, n)
            })
          )
        }
        ;(S.event = {
          global: {},
          add: function(e, t, n, r, o) {
            var i,
              a,
              s,
              l,
              c,
              u,
              f,
              d,
              p,
              h,
              v,
              g = Q.get(e)
            if (g)
              for (
                n.handler && ((n = (i = n).handler), (o = i.selector)),
                  o && S.find.matchesSelector(Te, o),
                  n.guid || (n.guid = S.guid++),
                  (l = g.events) || (l = g.events = {}),
                  (a = g.handle) ||
                    (a = g.handle = function(t) {
                      return void 0 !== S && S.event.triggered !== t.type
                        ? S.event.dispatch.apply(e, arguments)
                        : void 0
                    }),
                  c = (t = (t || '').match(P) || ['']).length;
                c--;

              )
                (p = v = (s = ke.exec(t[c]) || [])[1]),
                  (h = (s[2] || '').split('.').sort()),
                  p &&
                    ((f = S.event.special[p] || {}),
                    (p = (o ? f.delegateType : f.bindType) || p),
                    (f = S.event.special[p] || {}),
                    (u = S.extend(
                      {
                        type: p,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && S.expr.match.needsContext.test(o),
                        namespace: h.join('.')
                      },
                      i
                    )),
                    (d = l[p]) ||
                      (((d = l[p] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                        (e.addEventListener && e.addEventListener(p, a))),
                    f.add &&
                      (f.add.call(e, u),
                      u.handler.guid || (u.handler.guid = n.guid)),
                    o ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    (S.event.global[p] = !0))
          },
          remove: function(e, t, n, r, o) {
            var i,
              a,
              s,
              l,
              c,
              u,
              f,
              d,
              p,
              h,
              v,
              g = Q.hasData(e) && Q.get(e)
            if (g && (l = g.events)) {
              for (c = (t = (t || '').match(P) || ['']).length; c--; )
                if (
                  ((p = v = (s = ke.exec(t[c]) || [])[1]),
                  (h = (s[2] || '').split('.').sort()),
                  p)
                ) {
                  for (
                    f = S.event.special[p] || {},
                      d = l[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                      s =
                        s[2] &&
                        new RegExp(
                          '(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'
                        ),
                      a = i = d.length;
                    i--;

                  )
                    (u = d[i]),
                      (!o && v !== u.origType) ||
                        (n && n.guid !== u.guid) ||
                        (s && !s.test(u.namespace)) ||
                        (r &&
                          r !== u.selector &&
                          ('**' !== r || !u.selector)) ||
                        (d.splice(i, 1),
                        u.selector && d.delegateCount--,
                        f.remove && f.remove.call(e, u))
                  a &&
                    !d.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, g.handle)) ||
                      S.removeEvent(e, p, g.handle),
                    delete l[p])
                } else for (p in l) S.event.remove(e, p + t[c], n, r, !0)
              S.isEmptyObject(l) && Q.remove(e, 'handle events')
            }
          },
          dispatch: function(e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s = S.event.fix(e),
              l = new Array(arguments.length),
              c = (Q.get(this, 'events') || {})[s.type] || [],
              u = S.event.special[s.type] || {}
            for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t]
            if (
              ((s.delegateTarget = this),
              !u.preDispatch || !1 !== u.preDispatch.call(this, s))
            ) {
              for (
                a = S.event.handlers.call(this, s, c), t = 0;
                (o = a[t++]) && !s.isPropagationStopped();

              )
                for (
                  s.currentTarget = o.elem, n = 0;
                  (i = o.handlers[n++]) && !s.isImmediatePropagationStopped();

                )
                  (s.rnamespace && !s.rnamespace.test(i.namespace)) ||
                    ((s.handleObj = i),
                    (s.data = i.data),
                    void 0 !==
                      (r = (
                        (S.event.special[i.origType] || {}).handle || i.handler
                      ).apply(o.elem, l)) &&
                      !1 === (s.result = r) &&
                      (s.preventDefault(), s.stopPropagation()))
              return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
          },
          handlers: function(e, t) {
            var n,
              r,
              o,
              i,
              a,
              s = [],
              l = t.delegateCount,
              c = e.target
            if (l && c.nodeType && !('click' === e.type && e.button >= 1))
              for (; c !== this; c = c.parentNode || this)
                if (
                  1 === c.nodeType &&
                  ('click' !== e.type || !0 !== c.disabled)
                ) {
                  for (i = [], a = {}, n = 0; n < l; n++)
                    void 0 === a[(o = (r = t[n]).selector + ' ')] &&
                      (a[o] = r.needsContext
                        ? S(o, this).index(c) > -1
                        : S.find(o, this, null, [c]).length),
                      a[o] && i.push(r)
                  i.length && s.push({ elem: c, handlers: i })
                }
            return (
              (c = this),
              l < t.length && s.push({ elem: c, handlers: t.slice(l) }),
              s
            )
          },
          addProp: function(e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                  }
                : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                  },
              set: function(t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                })
              }
            })
          },
          fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
          },
          special: {
            load: { noBubble: !0 },
            focus: {
              trigger: function() {
                if (this !== De() && this.focus) return this.focus(), !1
              },
              delegateType: 'focusin'
            },
            blur: {
              trigger: function() {
                if (this === De() && this.blur) return this.blur(), !1
              },
              delegateType: 'focusout'
            },
            click: {
              trigger: function() {
                if ('checkbox' === this.type && this.click && L(this, 'input'))
                  return this.click(), !1
              },
              _default: function(e) {
                return L(e.target, 'a')
              }
            },
            beforeunload: {
              postDispatch: function(e) {
                void 0 !== e.result &&
                  e.originalEvent &&
                  (e.originalEvent.returnValue = e.result)
              }
            }
          }
        }),
          (S.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
          }),
          (S.Event = function(e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t)
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Ee
                    : Ae),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0)
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Ae,
            isPropagationStopped: Ae,
            isImmediatePropagationStopped: Ae,
            isSimulated: !1,
            preventDefault: function() {
              var e = this.originalEvent
              ;(this.isDefaultPrevented = Ee),
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
              var e = this.originalEvent
              ;(this.isPropagationStopped = Ee),
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
              var e = this.originalEvent
              ;(this.isImmediatePropagationStopped = Ee),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: function(e) {
                var t = e.button
                return null == e.which && Se.test(e.type)
                  ? null != e.charCode
                    ? e.charCode
                    : e.keyCode
                  : !e.which && void 0 !== t && Ce.test(e.type)
                    ? 1 & t
                      ? 1
                      : 2 & t
                        ? 3
                        : 4 & t
                          ? 2
                          : 0
                    : e.which
              }
            },
            S.event.addProp
          ),
          S.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout'
            },
            function(e, t) {
              S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                  var n,
                    r = e.relatedTarget,
                    o = e.handleObj
                  return (
                    (r && (r === this || S.contains(this, r))) ||
                      ((e.type = o.origType),
                      (n = o.handler.apply(this, arguments)),
                      (e.type = t)),
                    n
                  )
                }
              }
            }
          ),
          S.fn.extend({
            on: function(e, t, n, r) {
              return Ne(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
              return Ne(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
              var r, o
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  S(e.delegateTarget).off(
                    r.namespace ? r.origType + '.' + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                )
              if ('object' == typeof e) {
                for (o in e) this.off(o, t, e[o])
                return this
              }
              return (
                (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Ae),
                this.each(function() {
                  S.event.remove(this, e, n, t)
                })
              )
            }
          })
        var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
          je = /<script|<style|<link/i,
          qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        function He(e, t) {
          return (
            (L(e, 'table') &&
              L(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
              S(e).children('tbody')[0]) ||
            e
          )
        }
        function Me(e) {
          return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
        }
        function Re(e) {
          return (
            'true/' === (e.type || '').slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute('type'),
            e
          )
        }
        function Ie(e, t) {
          var n, r, o, i, a, s, l, c
          if (1 === t.nodeType) {
            if (
              Q.hasData(e) &&
              ((i = Q.access(e)), (a = Q.set(t, i)), (c = i.events))
            )
              for (o in (delete a.handle, (a.events = {}), c))
                for (n = 0, r = c[o].length; n < r; n++)
                  S.event.add(t, o, c[o][n])
            Z.hasData(e) &&
              ((s = Z.access(e)), (l = S.extend({}, s)), Z.set(t, l))
          }
        }
        function Pe(e, t, n, r) {
          t = c.apply([], t)
          var o,
            i,
            a,
            s,
            l,
            u,
            f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            v = y(h)
          if (
            v ||
            (d > 1 && 'string' == typeof h && !m.checkClone && qe.test(h))
          )
            return e.each(function(o) {
              var i = e.eq(o)
              v && (t[0] = h.call(this, o, i.html())), Pe(i, t, n, r)
            })
          if (
            d &&
            ((i = (o = we(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === o.childNodes.length && (o = i),
            i || r)
          ) {
            for (s = (a = S.map(ge(o, 'script'), Me)).length; f < d; f++)
              (l = o),
                f !== p &&
                  ((l = S.clone(l, !0, !0)), s && S.merge(a, ge(l, 'script'))),
                n.call(e[f], l, f)
            if (s)
              for (
                u = a[a.length - 1].ownerDocument, S.map(a, Re), f = 0;
                f < s;
                f++
              )
                (l = a[f]),
                  he.test(l.type || '') &&
                    !Q.access(l, 'globalEval') &&
                    S.contains(u, l) &&
                    (l.src && 'module' !== (l.type || '').toLowerCase()
                      ? S._evalUrl && S._evalUrl(l.src)
                      : w(l.textContent.replace(Oe, ''), u, l))
          }
          return e
        }
        function Be(e, t, n) {
          for (
            var r, o = t ? S.filter(t, e) : e, i = 0;
            null != (r = o[i]);
            i++
          )
            n || 1 !== r.nodeType || S.cleanData(ge(r)),
              r.parentNode &&
                (n && S.contains(r.ownerDocument, r) && me(ge(r, 'script')),
                r.parentNode.removeChild(r))
          return e
        }
        S.extend({
          htmlPrefilter: function(e) {
            return e.replace(Le, '<$1></$2>')
          },
          clone: function(e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              l,
              c,
              u = e.cloneNode(!0),
              f = S.contains(e.ownerDocument, e)
            if (
              !(
                m.noCloneChecked ||
                (1 !== e.nodeType && 11 !== e.nodeType) ||
                S.isXMLDoc(e)
              )
            )
              for (a = ge(u), r = 0, o = (i = ge(e)).length; r < o; r++)
                (s = i[r]),
                  (l = a[r]),
                  (c = void 0),
                  'input' === (c = l.nodeName.toLowerCase()) && de.test(s.type)
                    ? (l.checked = s.checked)
                    : ('input' !== c && 'textarea' !== c) ||
                      (l.defaultValue = s.defaultValue)
            if (t)
              if (n)
                for (
                  i = i || ge(e), a = a || ge(u), r = 0, o = i.length;
                  r < o;
                  r++
                )
                  Ie(i[r], a[r])
              else Ie(e, u)
            return (
              (a = ge(u, 'script')).length > 0 && me(a, !f && ge(e, 'script')),
              u
            )
          },
          cleanData: function(e) {
            for (
              var t, n, r, o = S.event.special, i = 0;
              void 0 !== (n = e[i]);
              i++
            )
              if (K(n)) {
                if ((t = n[Q.expando])) {
                  if (t.events)
                    for (r in t.events)
                      o[r]
                        ? S.event.remove(n, r)
                        : S.removeEvent(n, r, t.handle)
                  n[Q.expando] = void 0
                }
                n[Z.expando] && (n[Z.expando] = void 0)
              }
          }
        }),
          S.fn.extend({
            detach: function(e) {
              return Be(this, e, !0)
            },
            remove: function(e) {
              return Be(this, e)
            },
            text: function(e) {
              return X(
                this,
                function(e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function() {
                        ;(1 !== this.nodeType &&
                          11 !== this.nodeType &&
                          9 !== this.nodeType) ||
                          (this.textContent = e)
                      })
                },
                null,
                e,
                arguments.length
              )
            },
            append: function() {
              return Pe(this, arguments, function(e) {
                ;(1 !== this.nodeType &&
                  11 !== this.nodeType &&
                  9 !== this.nodeType) ||
                  He(this, e).appendChild(e)
              })
            },
            prepend: function() {
              return Pe(this, arguments, function(e) {
                if (
                  1 === this.nodeType ||
                  11 === this.nodeType ||
                  9 === this.nodeType
                ) {
                  var t = He(this, e)
                  t.insertBefore(e, t.firstChild)
                }
              })
            },
            before: function() {
              return Pe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
              })
            },
            after: function() {
              return Pe(this, arguments, function(e) {
                this.parentNode &&
                  this.parentNode.insertBefore(e, this.nextSibling)
              })
            },
            empty: function() {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType &&
                  (S.cleanData(ge(e, !1)), (e.textContent = ''))
              return this
            },
            clone: function(e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function() {
                  return S.clone(this, e, t)
                })
              )
            },
            html: function(e) {
              return X(
                this,
                function(e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML
                  if (
                    'string' == typeof e &&
                    !je.test(e) &&
                    !ve[(pe.exec(e) || ['', ''])[1].toLowerCase()]
                  ) {
                    e = S.htmlPrefilter(e)
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (S.cleanData(ge(t, !1)), (t.innerHTML = e))
                      t = 0
                    } catch (e) {}
                  }
                  t && this.empty().append(e)
                },
                null,
                e,
                arguments.length
              )
            },
            replaceWith: function() {
              var e = []
              return Pe(
                this,
                arguments,
                function(t) {
                  var n = this.parentNode
                  S.inArray(this, e) < 0 &&
                    (S.cleanData(ge(this)), n && n.replaceChild(t, this))
                },
                e
              )
            }
          }),
          S.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith'
            },
            function(e, t) {
              S.fn[e] = function(e) {
                for (
                  var n, r = [], o = S(e), i = o.length - 1, a = 0;
                  a <= i;
                  a++
                )
                  (n = a === i ? this : this.clone(!0)),
                    S(o[a])[t](n),
                    u.apply(r, n.get())
                return this.pushStack(r)
              }
            }
          )
        var Fe = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
          We = function(e) {
            var t = e.ownerDocument.defaultView
            return (t && t.opener) || (t = n), t.getComputedStyle(e)
          },
          ze = new RegExp(ie.join('|'), 'i')
        function $e(e, t, n) {
          var r,
            o,
            i,
            a,
            s = e.style
          return (
            (n = n || We(e)) &&
              ('' !== (a = n.getPropertyValue(t) || n[t]) ||
                S.contains(e.ownerDocument, e) ||
                (a = S.style(e, t)),
              !m.pixelBoxStyles() &&
                Fe.test(a) &&
                ze.test(t) &&
                ((r = s.width),
                (o = s.minWidth),
                (i = s.maxWidth),
                (s.minWidth = s.maxWidth = s.width = a),
                (a = n.width),
                (s.width = r),
                (s.minWidth = o),
                (s.maxWidth = i))),
            void 0 !== a ? a + '' : a
          )
        }
        function _e(e, t) {
          return {
            get: function() {
              if (!e()) return (this.get = t).apply(this, arguments)
              delete this.get
            }
          }
        }
        !(function() {
          function e() {
            if (u) {
              ;(c.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                (u.style.cssText =
                  'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                Te.appendChild(c).appendChild(u)
              var e = n.getComputedStyle(u)
              ;(r = '1%' !== e.top),
                (l = 12 === t(e.marginLeft)),
                (u.style.right = '60%'),
                (s = 36 === t(e.right)),
                (o = 36 === t(e.width)),
                (u.style.position = 'absolute'),
                (i = 36 === u.offsetWidth || 'absolute'),
                Te.removeChild(c),
                (u = null)
            }
          }
          function t(e) {
            return Math.round(parseFloat(e))
          }
          var r,
            o,
            i,
            s,
            l,
            c = a.createElement('div'),
            u = a.createElement('div')
          u.style &&
            ((u.style.backgroundClip = 'content-box'),
            (u.cloneNode(!0).style.backgroundClip = ''),
            (m.clearCloneStyle = 'content-box' === u.style.backgroundClip),
            S.extend(m, {
              boxSizingReliable: function() {
                return e(), o
              },
              pixelBoxStyles: function() {
                return e(), s
              },
              pixelPosition: function() {
                return e(), r
              },
              reliableMarginLeft: function() {
                return e(), l
              },
              scrollboxSize: function() {
                return e(), i
              }
            }))
        })()
        var Xe = /^(none|table(?!-c[ea]).+)/,
          Ue = /^--/,
          Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
          Ye = { letterSpacing: '0', fontWeight: '400' },
          Ge = ['Webkit', 'Moz', 'ms'],
          Ke = a.createElement('div').style
        function Je(e) {
          var t = S.cssProps[e]
          return (
            t ||
              (t = S.cssProps[e] =
                (function(e) {
                  if (e in Ke) return e
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                    n--;

                  )
                    if ((e = Ge[n] + t) in Ke) return e
                })(e) || e),
            t
          )
        }
        function Qe(e, t, n) {
          var r = oe.exec(t)
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
        }
        function Ze(e, t, n, r, o, i) {
          var a = 'width' === t ? 1 : 0,
            s = 0,
            l = 0
          if (n === (r ? 'border' : 'content')) return 0
          for (; a < 4; a += 2)
            'margin' === n && (l += S.css(e, n + ie[a], !0, o)),
              r
                ? ('content' === n && (l -= S.css(e, 'padding' + ie[a], !0, o)),
                  'margin' !== n &&
                    (l -= S.css(e, 'border' + ie[a] + 'Width', !0, o)))
                : ((l += S.css(e, 'padding' + ie[a], !0, o)),
                  'padding' !== n
                    ? (l += S.css(e, 'border' + ie[a] + 'Width', !0, o))
                    : (s += S.css(e, 'border' + ie[a] + 'Width', !0, o)))
          return (
            !r &&
              i >= 0 &&
              (l += Math.max(
                0,
                Math.ceil(
                  e['offset' + t[0].toUpperCase() + t.slice(1)] -
                    i -
                    l -
                    s -
                    0.5
                )
              )),
            l
          )
        }
        function et(e, t, n) {
          var r = We(e),
            o = $e(e, t, r),
            i = 'border-box' === S.css(e, 'boxSizing', !1, r),
            a = i
          if (Fe.test(o)) {
            if (!n) return o
            o = 'auto'
          }
          return (
            (a = a && (m.boxSizingReliable() || o === e.style[t])),
            ('auto' === o ||
              (!parseFloat(o) && 'inline' === S.css(e, 'display', !1, r))) &&
              ((o = e['offset' + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (o = parseFloat(o) || 0) +
              Ze(e, t, n || (i ? 'border' : 'content'), a, r, o) +
              'px'
          )
        }
        function tt(e, t, n, r, o) {
          return new tt.prototype.init(e, t, n, r, o)
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function(e, t) {
                if (t) {
                  var n = $e(e, 'opacity')
                  return '' === n ? '1' : n
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          },
          cssProps: {},
          style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var o,
                i,
                a,
                s = G(t),
                l = Ue.test(t),
                c = e.style
              if (
                (l || (t = Je(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]),
                void 0 === n)
              )
                return a && 'get' in a && void 0 !== (o = a.get(e, !1, r))
                  ? o
                  : c[t]
              'string' === (i = typeof n) &&
                (o = oe.exec(n)) &&
                o[1] &&
                ((n = le(e, t, o)), (i = 'number')),
                null != n &&
                  n == n &&
                  ('number' === i &&
                    (n += (o && o[3]) || (S.cssNumber[s] ? '' : 'px')),
                  m.clearCloneStyle ||
                    '' !== n ||
                    0 !== t.indexOf('background') ||
                    (c[t] = 'inherit'),
                  (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                    (l ? c.setProperty(t, n) : (c[t] = n)))
            }
          },
          css: function(e, t, n, r) {
            var o,
              i,
              a,
              s = G(t)
            return (
              Ue.test(t) || (t = Je(s)),
              (a = S.cssHooks[t] || S.cssHooks[s]) &&
                'get' in a &&
                (o = a.get(e, !0, n)),
              void 0 === o && (o = $e(e, t, r)),
              'normal' === o && t in Ye && (o = Ye[t]),
              '' === n || n
                ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                : o
            )
          }
        }),
          S.each(['height', 'width'], function(e, t) {
            S.cssHooks[t] = {
              get: function(e, n, r) {
                if (n)
                  return !Xe.test(S.css(e, 'display')) ||
                    (e.getClientRects().length &&
                      e.getBoundingClientRect().width)
                    ? et(e, t, r)
                    : se(e, Ve, function() {
                        return et(e, t, r)
                      })
              },
              set: function(e, n, r) {
                var o,
                  i = We(e),
                  a = 'border-box' === S.css(e, 'boxSizing', !1, i),
                  s = r && Ze(e, t, r, a, i)
                return (
                  a &&
                    m.scrollboxSize() === i.position &&
                    (s -= Math.ceil(
                      e['offset' + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(i[t]) -
                        Ze(e, t, 'border', !1, i) -
                        0.5
                    )),
                  s &&
                    (o = oe.exec(n)) &&
                    'px' !== (o[3] || 'px') &&
                    ((e.style[t] = n), (n = S.css(e, t))),
                  Qe(0, n, s)
                )
              }
            }
          }),
          (S.cssHooks.marginLeft = _e(m.reliableMarginLeft, function(e, t) {
            if (t)
              return (
                (parseFloat($e(e, 'marginLeft')) ||
                  e.getBoundingClientRect().left -
                    se(e, { marginLeft: 0 }, function() {
                      return e.getBoundingClientRect().left
                    })) + 'px'
              )
          })),
          S.each({ margin: '', padding: '', border: 'Width' }, function(e, t) {
            ;(S.cssHooks[e + t] = {
              expand: function(n) {
                for (
                  var r = 0,
                    o = {},
                    i = 'string' == typeof n ? n.split(' ') : [n];
                  r < 4;
                  r++
                )
                  o[e + ie[r] + t] = i[r] || i[r - 2] || i[0]
                return o
              }
            }),
              'margin' !== e && (S.cssHooks[e + t].set = Qe)
          }),
          S.fn.extend({
            css: function(e, t) {
              return X(
                this,
                function(e, t, n) {
                  var r,
                    o,
                    i = {},
                    a = 0
                  if (Array.isArray(t)) {
                    for (r = We(e), o = t.length; a < o; a++)
                      i[t[a]] = S.css(e, t[a], !1, r)
                    return i
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                },
                e,
                t,
                arguments.length > 1
              )
            }
          }),
          (S.Tween = tt),
          (tt.prototype = {
            constructor: tt,
            init: function(e, t, n, r, o, i) {
              ;(this.elem = e),
                (this.prop = n),
                (this.easing = o || S.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = i || (S.cssNumber[n] ? '' : 'px'))
            },
            cur: function() {
              var e = tt.propHooks[this.prop]
              return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
            },
            run: function(e) {
              var t,
                n = tt.propHooks[this.prop]
              return (
                this.options.duration
                  ? (this.pos = t = S.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step &&
                  this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                this
              )
            }
          }),
          (tt.prototype.init.prototype = tt.prototype),
          (tt.propHooks = {
            _default: {
              get: function(e) {
                var t
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
                    ? t
                    : 0
              },
              set: function(e) {
                S.fx.step[e.prop]
                  ? S.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                    (null == e.elem.style[S.cssProps[e.prop]] &&
                      !S.cssHooks[e.prop])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit)
              }
            }
          }),
          (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function(e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
          }),
          (S.easing = {
            linear: function(e) {
              return e
            },
            swing: function(e) {
              return 0.5 - Math.cos(e * Math.PI) / 2
            },
            _default: 'swing'
          }),
          (S.fx = tt.prototype.init),
          (S.fx.step = {})
        var nt,
          rt,
          ot = /^(?:toggle|show|hide)$/,
          it = /queueHooks$/
        function at() {
          rt &&
            (!1 === a.hidden && n.requestAnimationFrame
              ? n.requestAnimationFrame(at)
              : n.setTimeout(at, S.fx.interval),
            S.fx.tick())
        }
        function st() {
          return (
            n.setTimeout(function() {
              nt = void 0
            }),
            (nt = Date.now())
          )
        }
        function lt(e, t) {
          var n,
            r = 0,
            o = { height: e }
          for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o['margin' + (n = ie[r])] = o['padding' + n] = e
          return t && (o.opacity = o.width = e), o
        }
        function ct(e, t, n) {
          for (
            var r,
              o = (ut.tweeners[t] || []).concat(ut.tweeners['*']),
              i = 0,
              a = o.length;
            i < a;
            i++
          )
            if ((r = o[i].call(n, t, e))) return r
        }
        function ut(e, t, n) {
          var r,
            o,
            i = 0,
            a = ut.prefilters.length,
            s = S.Deferred().always(function() {
              delete l.elem
            }),
            l = function() {
              if (o) return !1
              for (
                var t = nt || st(),
                  n = Math.max(0, c.startTime + c.duration - t),
                  r = 1 - (n / c.duration || 0),
                  i = 0,
                  a = c.tweens.length;
                i < a;
                i++
              )
                c.tweens[i].run(r)
              return (
                s.notifyWith(e, [c, r, n]),
                r < 1 && a
                  ? n
                  : (a || s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c]), !1)
              )
            },
            c = s.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(
                !0,
                { specialEasing: {}, easing: S.easing._default },
                n
              ),
              originalProperties: t,
              originalOptions: n,
              startTime: nt || st(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                var r = S.Tween(
                  e,
                  c.opts,
                  t,
                  n,
                  c.opts.specialEasing[t] || c.opts.easing
                )
                return c.tweens.push(r), r
              },
              stop: function(t) {
                var n = 0,
                  r = t ? c.tweens.length : 0
                if (o) return this
                for (o = !0; n < r; n++) c.tweens[n].run(1)
                return (
                  t
                    ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t]))
                    : s.rejectWith(e, [c, t]),
                  this
                )
              }
            }),
            u = c.props
          for (
            !(function(e, t) {
              var n, r, o, i, a
              for (n in e)
                if (
                  ((o = t[(r = G(n))]),
                  (i = e[n]),
                  Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                  n !== r && ((e[r] = i), delete e[n]),
                  (a = S.cssHooks[r]) && ('expand' in a))
                )
                  for (n in ((i = a.expand(i)), delete e[r], i))
                    (n in e) || ((e[n] = i[n]), (t[n] = o))
                else t[r] = o
            })(u, c.opts.specialEasing);
            i < a;
            i++
          )
            if ((r = ut.prefilters[i].call(c, e, u, c.opts)))
              return (
                y(r.stop) &&
                  (S._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                r
              )
          return (
            S.map(u, ct, c),
            y(c.opts.start) && c.opts.start.call(e, c),
            c
              .progress(c.opts.progress)
              .done(c.opts.done, c.opts.complete)
              .fail(c.opts.fail)
              .always(c.opts.always),
            S.fx.timer(S.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
            c
          )
        }
        ;(S.Animation = S.extend(ut, {
          tweeners: {
            '*': [
              function(e, t) {
                var n = this.createTween(e, t)
                return le(n.elem, e, oe.exec(t), n), n
              }
            ]
          },
          tweener: function(e, t) {
            y(e) ? ((t = e), (e = ['*'])) : (e = e.match(P))
            for (var n, r = 0, o = e.length; r < o; r++)
              (n = e[r]),
                (ut.tweeners[n] = ut.tweeners[n] || []),
                ut.tweeners[n].unshift(t)
          },
          prefilters: [
            function(e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                l,
                c,
                u,
                f = 'width' in t || 'height' in t,
                d = this,
                p = {},
                h = e.style,
                v = e.nodeType && ae(e),
                g = Q.get(e, 'fxshow')
              for (r in (n.queue ||
                (null == (a = S._queueHooks(e, 'fx')).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function() {
                    a.unqueued || s()
                  })),
                a.unqueued++,
                d.always(function() {
                  d.always(function() {
                    a.unqueued--, S.queue(e, 'fx').length || a.empty.fire()
                  })
                })),
              t))
                if (((o = t[r]), ot.test(o))) {
                  if (
                    (delete t[r],
                    (i = i || 'toggle' === o),
                    o === (v ? 'hide' : 'show'))
                  ) {
                    if ('show' !== o || !g || void 0 === g[r]) continue
                    v = !0
                  }
                  p[r] = (g && g[r]) || S.style(e, r)
                }
              if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (c = g && g.display) && (c = Q.get(e, 'display')),
                  'none' === (u = S.css(e, 'display')) &&
                    (c
                      ? (u = c)
                      : (fe([e], !0),
                        (c = e.style.display || c),
                        (u = S.css(e, 'display')),
                        fe([e]))),
                  ('inline' === u || ('inline-block' === u && null != c)) &&
                    'none' === S.css(e, 'float') &&
                    (l ||
                      (d.done(function() {
                        h.display = c
                      }),
                      null == c &&
                        ((u = h.display), (c = 'none' === u ? '' : u))),
                    (h.display = 'inline-block'))),
                n.overflow &&
                  ((h.overflow = 'hidden'),
                  d.always(function() {
                    ;(h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2])
                  })),
                (l = !1),
                p))
                  l ||
                    (g
                      ? 'hidden' in g && (v = g.hidden)
                      : (g = Q.access(e, 'fxshow', { display: c })),
                    i && (g.hidden = !v),
                    v && fe([e], !0),
                    d.done(function() {
                      for (r in (v || fe([e]), Q.remove(e, 'fxshow'), p))
                        S.style(e, r, p[r])
                    })),
                    (l = ct(v ? g[r] : 0, r, d)),
                    r in g ||
                      ((g[r] = l.start),
                      v && ((l.end = l.start), (l.start = 0)))
            }
          ],
          prefilter: function(e, t) {
            t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
          }
        })),
          (S.speed = function(e, t, n) {
            var r =
              e && 'object' == typeof e
                ? S.extend({}, e)
                : {
                    complete: n || (!n && t) || (y(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !y(t) && t)
                  }
            return (
              S.fx.off
                ? (r.duration = 0)
                : 'number' != typeof r.duration &&
                  (r.duration in S.fx.speeds
                    ? (r.duration = S.fx.speeds[r.duration])
                    : (r.duration = S.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function() {
                y(r.old) && r.old.call(this),
                  r.queue && S.dequeue(this, r.queue)
              }),
              r
            )
          }),
          S.fn.extend({
            fadeTo: function(e, t, n, r) {
              return this.filter(ae)
                .css('opacity', 0)
                .show()
                .end()
                .animate({ opacity: t }, e, n, r)
            },
            animate: function(e, t, n, r) {
              var o = S.isEmptyObject(e),
                i = S.speed(t, n, r),
                a = function() {
                  var t = ut(this, S.extend({}, e), i)
                  ;(o || Q.get(this, 'finish')) && t.stop(!0)
                }
              return (
                (a.finish = a),
                o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
              )
            },
            stop: function(e, t, n) {
              var r = function(e) {
                var t = e.stop
                delete e.stop, t(n)
              }
              return (
                'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                t && !1 !== e && this.queue(e || 'fx', []),
                this.each(function() {
                  var t = !0,
                    o = null != e && e + 'queueHooks',
                    i = S.timers,
                    a = Q.get(this)
                  if (o) a[o] && a[o].stop && r(a[o])
                  else for (o in a) a[o] && a[o].stop && it.test(o) && r(a[o])
                  for (o = i.length; o--; )
                    i[o].elem !== this ||
                      (null != e && i[o].queue !== e) ||
                      (i[o].anim.stop(n), (t = !1), i.splice(o, 1))
                  ;(!t && n) || S.dequeue(this, e)
                })
              )
            },
            finish: function(e) {
              return (
                !1 !== e && (e = e || 'fx'),
                this.each(function() {
                  var t,
                    n = Q.get(this),
                    r = n[e + 'queue'],
                    o = n[e + 'queueHooks'],
                    i = S.timers,
                    a = r ? r.length : 0
                  for (
                    n.finish = !0,
                      S.queue(this, e, []),
                      o && o.stop && o.stop.call(this, !0),
                      t = i.length;
                    t--;

                  )
                    i[t].elem === this &&
                      i[t].queue === e &&
                      (i[t].anim.stop(!0), i.splice(t, 1))
                  for (t = 0; t < a; t++)
                    r[t] && r[t].finish && r[t].finish.call(this)
                  delete n.finish
                })
              )
            }
          }),
          S.each(['toggle', 'show', 'hide'], function(e, t) {
            var n = S.fn[t]
            S.fn[t] = function(e, r, o) {
              return null == e || 'boolean' == typeof e
                ? n.apply(this, arguments)
                : this.animate(lt(t, !0), e, r, o)
            }
          }),
          S.each(
            {
              slideDown: lt('show'),
              slideUp: lt('hide'),
              slideToggle: lt('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' }
            },
            function(e, t) {
              S.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
              }
            }
          ),
          (S.timers = []),
          (S.fx.tick = function() {
            var e,
              t = 0,
              n = S.timers
            for (nt = Date.now(); t < n.length; t++)
              (e = n[t])() || n[t] !== e || n.splice(t--, 1)
            n.length || S.fx.stop(), (nt = void 0)
          }),
          (S.fx.timer = function(e) {
            S.timers.push(e), S.fx.start()
          }),
          (S.fx.interval = 13),
          (S.fx.start = function() {
            rt || ((rt = !0), at())
          }),
          (S.fx.stop = function() {
            rt = null
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function(e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || 'fx'),
              this.queue(t, function(t, r) {
                var o = n.setTimeout(t, e)
                r.stop = function() {
                  n.clearTimeout(o)
                }
              })
            )
          }),
          (function() {
            var e = a.createElement('input'),
              t = a
                .createElement('select')
                .appendChild(a.createElement('option'))
            ;(e.type = 'checkbox'),
              (m.checkOn = '' !== e.value),
              (m.optSelected = t.selected),
              ((e = a.createElement('input')).value = 't'),
              (e.type = 'radio'),
              (m.radioValue = 't' === e.value)
          })()
        var ft,
          dt = S.expr.attrHandle
        S.fn.extend({
          attr: function(e, t) {
            return X(this, S.attr, e, t, arguments.length > 1)
          },
          removeAttr: function(e) {
            return this.each(function() {
              S.removeAttr(this, e)
            })
          }
        }),
          S.extend({
            attr: function(e, t, n) {
              var r,
                o,
                i = e.nodeType
              if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === i && S.isXMLDoc(e)) ||
                      (o =
                        S.attrHooks[t.toLowerCase()] ||
                        (S.expr.match.bool.test(t) ? ft : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void S.removeAttr(e, t)
                        : o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ''), n)
                      : o && 'get' in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = S.find.attr(e, t))
                          ? void 0
                          : r)
            },
            attrHooks: {
              type: {
                set: function(e, t) {
                  if (!m.radioValue && 'radio' === t && L(e, 'input')) {
                    var n = e.value
                    return e.setAttribute('type', t), n && (e.value = n), t
                  }
                }
              }
            },
            removeAttr: function(e, t) {
              var n,
                r = 0,
                o = t && t.match(P)
              if (o && 1 === e.nodeType)
                for (; (n = o[r++]); ) e.removeAttribute(n)
            }
          }),
          (ft = {
            set: function(e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
            }
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || S.find.attr
            dt[t] = function(e, t, r) {
              var o,
                i,
                a = t.toLowerCase()
              return (
                r ||
                  ((i = dt[a]),
                  (dt[a] = o),
                  (o = null != n(e, t, r) ? a : null),
                  (dt[a] = i)),
                o
              )
            }
          })
        var pt = /^(?:input|select|textarea|button)$/i,
          ht = /^(?:a|area)$/i
        function vt(e) {
          return (e.match(P) || []).join(' ')
        }
        function gt(e) {
          return (e.getAttribute && e.getAttribute('class')) || ''
        }
        function mt(e) {
          return Array.isArray(e)
            ? e
            : ('string' == typeof e && e.match(P)) || []
        }
        S.fn.extend({
          prop: function(e, t) {
            return X(this, S.prop, e, t, arguments.length > 1)
          },
          removeProp: function(e) {
            return this.each(function() {
              delete this[S.propFix[e] || e]
            })
          }
        }),
          S.extend({
            prop: function(e, t, n) {
              var r,
                o,
                i = e.nodeType
              if (3 !== i && 8 !== i && 2 !== i)
                return (
                  (1 === i && S.isXMLDoc(e)) ||
                    ((t = S.propFix[t] || t), (o = S.propHooks[t])),
                  void 0 !== n
                    ? o && 'set' in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : o && 'get' in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                )
            },
            propHooks: {
              tabIndex: {
                get: function(e) {
                  var t = S.find.attr(e, 'tabindex')
                  return t
                    ? parseInt(t, 10)
                    : pt.test(e.nodeName) || (ht.test(e.nodeName) && e.href)
                      ? 0
                      : -1
                }
              }
            },
            propFix: { for: 'htmlFor', class: 'className' }
          }),
          m.optSelected ||
            (S.propHooks.selected = {
              get: function(e) {
                var t = e.parentNode
                return t && t.parentNode && t.parentNode.selectedIndex, null
              },
              set: function(e) {
                var t = e.parentNode
                t &&
                  (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
              }
            }),
          S.each(
            [
              'tabIndex',
              'readOnly',
              'maxLength',
              'cellSpacing',
              'cellPadding',
              'rowSpan',
              'colSpan',
              'useMap',
              'frameBorder',
              'contentEditable'
            ],
            function() {
              S.propFix[this.toLowerCase()] = this
            }
          ),
          S.fn.extend({
            addClass: function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s,
                l = 0
              if (y(e))
                return this.each(function(t) {
                  S(this).addClass(e.call(this, t, gt(this)))
                })
              if ((t = mt(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((o = gt(n)), (r = 1 === n.nodeType && ' ' + vt(o) + ' '))
                  ) {
                    for (a = 0; (i = t[a++]); )
                      r.indexOf(' ' + i + ' ') < 0 && (r += i + ' ')
                    o !== (s = vt(r)) && n.setAttribute('class', s)
                  }
              return this
            },
            removeClass: function(e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s,
                l = 0
              if (y(e))
                return this.each(function(t) {
                  S(this).removeClass(e.call(this, t, gt(this)))
                })
              if (!arguments.length) return this.attr('class', '')
              if ((t = mt(e)).length)
                for (; (n = this[l++]); )
                  if (
                    ((o = gt(n)), (r = 1 === n.nodeType && ' ' + vt(o) + ' '))
                  ) {
                    for (a = 0; (i = t[a++]); )
                      for (; r.indexOf(' ' + i + ' ') > -1; )
                        r = r.replace(' ' + i + ' ', ' ')
                    o !== (s = vt(r)) && n.setAttribute('class', s)
                  }
              return this
            },
            toggleClass: function(e, t) {
              var n = typeof e,
                r = 'string' === n || Array.isArray(e)
              return 'boolean' == typeof t && r
                ? t
                  ? this.addClass(e)
                  : this.removeClass(e)
                : y(e)
                  ? this.each(function(n) {
                      S(this).toggleClass(e.call(this, n, gt(this), t), t)
                    })
                  : this.each(function() {
                      var t, o, i, a
                      if (r)
                        for (o = 0, i = S(this), a = mt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                      else
                        (void 0 !== e && 'boolean' !== n) ||
                          ((t = gt(this)) && Q.set(this, '__className__', t),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              t || !1 === e
                                ? ''
                                : Q.get(this, '__className__') || ''
                            ))
                    })
            },
            hasClass: function(e) {
              var t,
                n,
                r = 0
              for (t = ' ' + e + ' '; (n = this[r++]); )
                if (1 === n.nodeType && (' ' + vt(gt(n)) + ' ').indexOf(t) > -1)
                  return !0
              return !1
            }
          })
        var yt = /\r/g
        S.fn.extend({
          val: function(e) {
            var t,
              n,
              r,
              o = this[0]
            return arguments.length
              ? ((r = y(e)),
                this.each(function(n) {
                  var o
                  1 === this.nodeType &&
                    (null == (o = r ? e.call(this, n, S(this).val()) : e)
                      ? (o = '')
                      : 'number' == typeof o
                        ? (o += '')
                        : Array.isArray(o) &&
                          (o = S.map(o, function(e) {
                            return null == e ? '' : e + ''
                          })),
                    ((t =
                      S.valHooks[this.type] ||
                      S.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in t &&
                      void 0 !== t.set(this, o, 'value')) ||
                      (this.value = o))
                }))
              : o
                ? (t =
                    S.valHooks[o.type] ||
                    S.valHooks[o.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (n = t.get(o, 'value'))
                  ? n
                  : 'string' == typeof (n = o.value)
                    ? n.replace(yt, '')
                    : null == n
                      ? ''
                      : n
                : void 0
          }
        }),
          S.extend({
            valHooks: {
              option: {
                get: function(e) {
                  var t = S.find.attr(e, 'value')
                  return null != t ? t : vt(S.text(e))
                }
              },
              select: {
                get: function(e) {
                  var t,
                    n,
                    r,
                    o = e.options,
                    i = e.selectedIndex,
                    a = 'select-one' === e.type,
                    s = a ? null : [],
                    l = a ? i + 1 : o.length
                  for (r = i < 0 ? l : a ? i : 0; r < l; r++)
                    if (
                      ((n = o[r]).selected || r === i) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !L(n.parentNode, 'optgroup'))
                    ) {
                      if (((t = S(n).val()), a)) return t
                      s.push(t)
                    }
                  return s
                },
                set: function(e, t) {
                  for (
                    var n, r, o = e.options, i = S.makeArray(t), a = o.length;
                    a--;

                  )
                    ((r = o[a]).selected =
                      S.inArray(S.valHooks.option.get(r), i) > -1) && (n = !0)
                  return n || (e.selectedIndex = -1), i
                }
              }
            }
          }),
          S.each(['radio', 'checkbox'], function() {
            ;(S.valHooks[this] = {
              set: function(e, t) {
                if (Array.isArray(t))
                  return (e.checked = S.inArray(S(e).val(), t) > -1)
              }
            }),
              m.checkOn ||
                (S.valHooks[this].get = function(e) {
                  return null === e.getAttribute('value') ? 'on' : e.value
                })
          }),
          (m.focusin = 'onfocusin' in n)
        var xt = /^(?:focusinfocus|focusoutblur)$/,
          bt = function(e) {
            e.stopPropagation()
          }
        S.extend(S.event, {
          trigger: function(e, t, r, o) {
            var i,
              s,
              l,
              c,
              u,
              f,
              d,
              p,
              v = [r || a],
              g = h.call(e, 'type') ? e.type : e,
              m = h.call(e, 'namespace') ? e.namespace.split('.') : []
            if (
              ((s = p = l = r = r || a),
              3 !== r.nodeType &&
                8 !== r.nodeType &&
                !xt.test(g + S.event.triggered) &&
                (g.indexOf('.') > -1 &&
                  ((m = g.split('.')), (g = m.shift()), m.sort()),
                (u = g.indexOf(':') < 0 && 'on' + g),
                ((e = e[S.expando]
                  ? e
                  : new S.Event(g, 'object' == typeof e && e)).isTrigger = o
                  ? 2
                  : 3),
                (e.namespace = m.join('.')),
                (e.rnamespace = e.namespace
                  ? new RegExp('(^|\\.)' + m.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (e.result = void 0),
                e.target || (e.target = r),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (d = S.event.special[g] || {}),
                o || !d.trigger || !1 !== d.trigger.apply(r, t)))
            ) {
              if (!o && !d.noBubble && !x(r)) {
                for (
                  c = d.delegateType || g, xt.test(c + g) || (s = s.parentNode);
                  s;
                  s = s.parentNode
                )
                  v.push(s), (l = s)
                l === (r.ownerDocument || a) &&
                  v.push(l.defaultView || l.parentWindow || n)
              }
              for (i = 0; (s = v[i++]) && !e.isPropagationStopped(); )
                (p = s),
                  (e.type = i > 1 ? c : d.bindType || g),
                  (f =
                    (Q.get(s, 'events') || {})[e.type] && Q.get(s, 'handle')) &&
                    f.apply(s, t),
                  (f = u && s[u]) &&
                    f.apply &&
                    K(s) &&
                    ((e.result = f.apply(s, t)),
                    !1 === e.result && e.preventDefault())
              return (
                (e.type = g),
                o ||
                  e.isDefaultPrevented() ||
                  (d._default && !1 !== d._default.apply(v.pop(), t)) ||
                  !K(r) ||
                  (u &&
                    y(r[g]) &&
                    !x(r) &&
                    ((l = r[u]) && (r[u] = null),
                    (S.event.triggered = g),
                    e.isPropagationStopped() && p.addEventListener(g, bt),
                    r[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, bt),
                    (S.event.triggered = void 0),
                    l && (r[u] = l))),
                e.result
              )
            }
          },
          simulate: function(e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 })
            S.event.trigger(r, null, t)
          }
        }),
          S.fn.extend({
            trigger: function(e, t) {
              return this.each(function() {
                S.event.trigger(e, t, this)
              })
            },
            triggerHandler: function(e, t) {
              var n = this[0]
              if (n) return S.event.trigger(e, t, n, !0)
            }
          }),
          m.focusin ||
            S.each({ focus: 'focusin', blur: 'focusout' }, function(e, t) {
              var n = function(e) {
                S.event.simulate(t, e.target, S.event.fix(e))
              }
              S.event.special[t] = {
                setup: function() {
                  var r = this.ownerDocument || this,
                    o = Q.access(r, t)
                  o || r.addEventListener(e, n, !0),
                    Q.access(r, t, (o || 0) + 1)
                },
                teardown: function() {
                  var r = this.ownerDocument || this,
                    o = Q.access(r, t) - 1
                  o
                    ? Q.access(r, t, o)
                    : (r.removeEventListener(e, n, !0), Q.remove(r, t))
                }
              }
            })
        var wt = n.location,
          Tt = Date.now(),
          St = /\?/
        S.parseXML = function(e) {
          var t
          if (!e || 'string' != typeof e) return null
          try {
            t = new n.DOMParser().parseFromString(e, 'text/xml')
          } catch (e) {
            t = void 0
          }
          return (
            (t && !t.getElementsByTagName('parsererror').length) ||
              S.error('Invalid XML: ' + e),
            t
          )
        }
        var Ct = /\[\]$/,
          kt = /\r?\n/g,
          Et = /^(?:submit|button|image|reset|file)$/i,
          At = /^(?:input|select|textarea|keygen)/i
        function Dt(e, t, n, r) {
          var o
          if (Array.isArray(t))
            S.each(t, function(t, o) {
              n || Ct.test(e)
                ? r(e, o)
                : Dt(
                    e +
                      '[' +
                      ('object' == typeof o && null != o ? t : '') +
                      ']',
                    o,
                    n,
                    r
                  )
            })
          else if (n || 'object' !== T(t)) r(e, t)
          else for (o in t) Dt(e + '[' + o + ']', t[o], n, r)
        }
        ;(S.param = function(e, t) {
          var n,
            r = [],
            o = function(e, t) {
              var n = y(t) ? t() : t
              r[r.length] =
                encodeURIComponent(e) +
                '=' +
                encodeURIComponent(null == n ? '' : n)
            }
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function() {
              o(this.name, this.value)
            })
          else for (n in e) Dt(n, e[n], t, o)
          return r.join('&')
        }),
          S.fn.extend({
            serialize: function() {
              return S.param(this.serializeArray())
            },
            serializeArray: function() {
              return this.map(function() {
                var e = S.prop(this, 'elements')
                return e ? S.makeArray(e) : this
              })
                .filter(function() {
                  var e = this.type
                  return (
                    this.name &&
                    !S(this).is(':disabled') &&
                    At.test(this.nodeName) &&
                    !Et.test(e) &&
                    (this.checked || !de.test(e))
                  )
                })
                .map(function(e, t) {
                  var n = S(this).val()
                  return null == n
                    ? null
                    : Array.isArray(n)
                      ? S.map(n, function(e) {
                          return { name: t.name, value: e.replace(kt, '\r\n') }
                        })
                      : { name: t.name, value: n.replace(kt, '\r\n') }
                })
                .get()
            }
          })
        var Nt = /%20/g,
          Lt = /#.*$/,
          jt = /([?&])_=[^&]*/,
          qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Ot = /^(?:GET|HEAD)$/,
          Ht = /^\/\//,
          Mt = {},
          Rt = {},
          It = '*/'.concat('*'),
          Pt = a.createElement('a')
        function Bt(e) {
          return function(t, n) {
            'string' != typeof t && ((n = t), (t = '*'))
            var r,
              o = 0,
              i = t.toLowerCase().match(P) || []
            if (y(n))
              for (; (r = i[o++]); )
                '+' === r[0]
                  ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n)
          }
        }
        function Ft(e, t, n, r) {
          var o = {},
            i = e === Rt
          function a(s) {
            var l
            return (
              (o[s] = !0),
              S.each(e[s] || [], function(e, s) {
                var c = s(t, n, r)
                return 'string' != typeof c || i || o[c]
                  ? i
                    ? !(l = c)
                    : void 0
                  : (t.dataTypes.unshift(c), a(c), !1)
              }),
              l
            )
          }
          return a(t.dataTypes[0]) || (!o['*'] && a('*'))
        }
        function Wt(e, t) {
          var n,
            r,
            o = S.ajaxSettings.flatOptions || {}
          for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n])
          return r && S.extend(!0, e, r), e
        }
        ;(Pt.href = wt.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: wt.href,
              type: 'GET',
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                wt.protocol
              ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': It,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: {
                xml: 'responseXML',
                text: 'responseText',
                json: 'responseJSON'
              },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': S.parseXML
              },
              flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function(e, t) {
              return t ? Wt(Wt(e, S.ajaxSettings), t) : Wt(S.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(Mt),
            ajaxTransport: Bt(Rt),
            ajax: function(e, t) {
              'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
              var r,
                o,
                i,
                s,
                l,
                c,
                u,
                f,
                d,
                p,
                h = S.ajaxSetup({}, t),
                v = h.context || h,
                g = h.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                m = S.Deferred(),
                y = S.Callbacks('once memory'),
                x = h.statusCode || {},
                b = {},
                w = {},
                T = 'canceled',
                C = {
                  readyState: 0,
                  getResponseHeader: function(e) {
                    var t
                    if (u) {
                      if (!s)
                        for (s = {}; (t = qt.exec(i)); )
                          s[t[1].toLowerCase()] = t[2]
                      t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                  },
                  getAllResponseHeaders: function() {
                    return u ? i : null
                  },
                  setRequestHeader: function(e, t) {
                    return (
                      null == u &&
                        ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                        (b[e] = t)),
                      this
                    )
                  },
                  overrideMimeType: function(e) {
                    return null == u && (h.mimeType = e), this
                  },
                  statusCode: function(e) {
                    var t
                    if (e)
                      if (u) C.always(e[C.status])
                      else for (t in e) x[t] = [x[t], e[t]]
                    return this
                  },
                  abort: function(e) {
                    var t = e || T
                    return r && r.abort(t), k(0, t), this
                  }
                }
              if (
                (m.promise(C),
                (h.url = ((e || h.url || wt.href) + '').replace(
                  Ht,
                  wt.protocol + '//'
                )),
                (h.type = t.method || t.type || h.method || h.type),
                (h.dataTypes = (h.dataType || '*').toLowerCase().match(P) || [
                  ''
                ]),
                null == h.crossDomain)
              ) {
                c = a.createElement('a')
                try {
                  ;(c.href = h.url),
                    (c.href = c.href),
                    (h.crossDomain =
                      Pt.protocol + '//' + Pt.host !=
                      c.protocol + '//' + c.host)
                } catch (e) {
                  h.crossDomain = !0
                }
              }
              if (
                (h.data &&
                  h.processData &&
                  'string' != typeof h.data &&
                  (h.data = S.param(h.data, h.traditional)),
                Ft(Mt, h, t, C),
                u)
              )
                return C
              for (d in ((f = S.event && h.global) &&
                0 == S.active++ &&
                S.event.trigger('ajaxStart'),
              (h.type = h.type.toUpperCase()),
              (h.hasContent = !Ot.test(h.type)),
              (o = h.url.replace(Lt, '')),
              h.hasContent
                ? h.data &&
                  h.processData &&
                  0 ===
                    (h.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  (h.data = h.data.replace(Nt, '+'))
                : ((p = h.url.slice(o.length)),
                  h.data &&
                    (h.processData || 'string' == typeof h.data) &&
                    ((o += (St.test(o) ? '&' : '?') + h.data), delete h.data),
                  !1 === h.cache &&
                    ((o = o.replace(jt, '$1')),
                    (p = (St.test(o) ? '&' : '?') + '_=' + Tt++ + p)),
                  (h.url = o + p)),
              h.ifModified &&
                (S.lastModified[o] &&
                  C.setRequestHeader('If-Modified-Since', S.lastModified[o]),
                S.etag[o] && C.setRequestHeader('If-None-Match', S.etag[o])),
              ((h.data && h.hasContent && !1 !== h.contentType) ||
                t.contentType) &&
                C.setRequestHeader('Content-Type', h.contentType),
              C.setRequestHeader(
                'Accept',
                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                  ? h.accepts[h.dataTypes[0]] +
                    ('*' !== h.dataTypes[0] ? ', ' + It + '; q=0.01' : '')
                  : h.accepts['*']
              ),
              h.headers))
                C.setRequestHeader(d, h.headers[d])
              if (h.beforeSend && (!1 === h.beforeSend.call(v, C, h) || u))
                return C.abort()
              if (
                ((T = 'abort'),
                y.add(h.complete),
                C.done(h.success),
                C.fail(h.error),
                (r = Ft(Rt, h, t, C)))
              ) {
                if (((C.readyState = 1), f && g.trigger('ajaxSend', [C, h]), u))
                  return C
                h.async &&
                  h.timeout > 0 &&
                  (l = n.setTimeout(function() {
                    C.abort('timeout')
                  }, h.timeout))
                try {
                  ;(u = !1), r.send(b, k)
                } catch (e) {
                  if (u) throw e
                  k(-1, e)
                }
              } else k(-1, 'No Transport')
              function k(e, t, a, s) {
                var c,
                  d,
                  p,
                  b,
                  w,
                  T = t
                u ||
                  ((u = !0),
                  l && n.clearTimeout(l),
                  (r = void 0),
                  (i = s || ''),
                  (C.readyState = e > 0 ? 4 : 0),
                  (c = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (b = (function(e, t, n) {
                      for (
                        var r, o, i, a, s = e.contents, l = e.dataTypes;
                        '*' === l[0];

                      )
                        l.shift(),
                          void 0 === r &&
                            (r =
                              e.mimeType || t.getResponseHeader('Content-Type'))
                      if (r)
                        for (o in s)
                          if (s[o] && s[o].test(r)) {
                            l.unshift(o)
                            break
                          }
                      if (l[0] in n) i = l[0]
                      else {
                        for (o in n) {
                          if (!l[0] || e.converters[o + ' ' + l[0]]) {
                            i = o
                            break
                          }
                          a || (a = o)
                        }
                        i = i || a
                      }
                      if (i) return i !== l[0] && l.unshift(i), n[i]
                    })(h, C, a)),
                  (b = (function(e, t, n, r) {
                    var o,
                      i,
                      a,
                      s,
                      l,
                      c = {},
                      u = e.dataTypes.slice()
                    if (u[1])
                      for (a in e.converters)
                        c[a.toLowerCase()] = e.converters[a]
                    for (i = u.shift(); i; )
                      if (
                        (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !l &&
                          r &&
                          e.dataFilter &&
                          (t = e.dataFilter(t, e.dataType)),
                        (l = i),
                        (i = u.shift()))
                      )
                        if ('*' === i) i = l
                        else if ('*' !== l && l !== i) {
                          if (!(a = c[l + ' ' + i] || c['* ' + i]))
                            for (o in c)
                              if (
                                (s = o.split(' '))[1] === i &&
                                (a = c[l + ' ' + s[0]] || c['* ' + s[0]])
                              ) {
                                !0 === a
                                  ? (a = c[o])
                                  : !0 !== c[o] && ((i = s[0]), u.unshift(s[1]))
                                break
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t)
                            else
                              try {
                                t = a(t)
                              } catch (e) {
                                return {
                                  state: 'parsererror',
                                  error: a
                                    ? e
                                    : 'No conversion from ' + l + ' to ' + i
                                }
                              }
                        }
                    return { state: 'success', data: t }
                  })(h, b, C, c)),
                  c
                    ? (h.ifModified &&
                        ((w = C.getResponseHeader('Last-Modified')) &&
                          (S.lastModified[o] = w),
                        (w = C.getResponseHeader('etag')) && (S.etag[o] = w)),
                      204 === e || 'HEAD' === h.type
                        ? (T = 'nocontent')
                        : 304 === e
                          ? (T = 'notmodified')
                          : ((T = b.state), (d = b.data), (c = !(p = b.error))))
                    : ((p = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                  (C.status = e),
                  (C.statusText = (t || T) + ''),
                  c ? m.resolveWith(v, [d, T, C]) : m.rejectWith(v, [C, T, p]),
                  C.statusCode(x),
                  (x = void 0),
                  f &&
                    g.trigger(c ? 'ajaxSuccess' : 'ajaxError', [
                      C,
                      h,
                      c ? d : p
                    ]),
                  y.fireWith(v, [C, T]),
                  f &&
                    (g.trigger('ajaxComplete', [C, h]),
                    --S.active || S.event.trigger('ajaxStop')))
              }
              return C
            },
            getJSON: function(e, t, n) {
              return S.get(e, t, n, 'json')
            },
            getScript: function(e, t) {
              return S.get(e, void 0, t, 'script')
            }
          }),
          S.each(['get', 'post'], function(e, t) {
            S[t] = function(e, n, r, o) {
              return (
                y(n) && ((o = o || r), (r = n), (n = void 0)),
                S.ajax(
                  S.extend(
                    { url: e, type: t, dataType: o, data: n, success: r },
                    S.isPlainObject(e) && e
                  )
                )
              )
            }
          }),
          (S._evalUrl = function(e) {
            return S.ajax({
              url: e,
              type: 'GET',
              dataType: 'script',
              cache: !0,
              async: !1,
              global: !1,
              throws: !0
            })
          }),
          S.fn.extend({
            wrapAll: function(e) {
              var t
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument)
                    .eq(0)
                    .clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function() {
                      for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild
                      return e
                    })
                    .append(this)),
                this
              )
            },
            wrapInner: function(e) {
              return y(e)
                ? this.each(function(t) {
                    S(this).wrapInner(e.call(this, t))
                  })
                : this.each(function() {
                    var t = S(this),
                      n = t.contents()
                    n.length ? n.wrapAll(e) : t.append(e)
                  })
            },
            wrap: function(e) {
              var t = y(e)
              return this.each(function(n) {
                S(this).wrapAll(t ? e.call(this, n) : e)
              })
            },
            unwrap: function(e) {
              return (
                this.parent(e)
                  .not('body')
                  .each(function() {
                    S(this).replaceWith(this.childNodes)
                  }),
                this
              )
            }
          }),
          (S.expr.pseudos.hidden = function(e) {
            return !S.expr.pseudos.visible(e)
          }),
          (S.expr.pseudos.visible = function(e) {
            return !!(
              e.offsetWidth ||
              e.offsetHeight ||
              e.getClientRects().length
            )
          }),
          (S.ajaxSettings.xhr = function() {
            try {
              return new n.XMLHttpRequest()
            } catch (e) {}
          })
        var zt = { 0: 200, 1223: 204 },
          $t = S.ajaxSettings.xhr()
        ;(m.cors = !!$t && 'withCredentials' in $t),
          (m.ajax = $t = !!$t),
          S.ajaxTransport(function(e) {
            var t, r
            if (m.cors || ($t && !e.crossDomain))
              return {
                send: function(o, i) {
                  var a,
                    s = e.xhr()
                  if (
                    (s.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                  )
                    for (a in e.xhrFields) s[a] = e.xhrFields[a]
                  for (a in (e.mimeType &&
                    s.overrideMimeType &&
                    s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    o['X-Requested-With'] ||
                    (o['X-Requested-With'] = 'XMLHttpRequest'),
                  o))
                    s.setRequestHeader(a, o[a])
                  ;(t = function(e) {
                    return function() {
                      t &&
                        ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                        'abort' === e
                          ? s.abort()
                          : 'error' === e
                            ? 'number' != typeof s.status
                              ? i(0, 'error')
                              : i(s.status, s.statusText)
                            : i(
                                zt[s.status] || s.status,
                                s.statusText,
                                'text' !== (s.responseType || 'text') ||
                                'string' != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ))
                    }
                  }),
                    (s.onload = t()),
                    (r = s.onerror = s.ontimeout = t('error')),
                    void 0 !== s.onabort
                      ? (s.onabort = r)
                      : (s.onreadystatechange = function() {
                          4 === s.readyState &&
                            n.setTimeout(function() {
                              t && r()
                            })
                        }),
                    (t = t('abort'))
                  try {
                    s.send((e.hasContent && e.data) || null)
                  } catch (e) {
                    if (t) throw e
                  }
                },
                abort: function() {
                  t && t()
                }
              }
          }),
          S.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
          }),
          S.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              'text script': function(e) {
                return S.globalEval(e), e
              }
            }
          }),
          S.ajaxPrefilter('script', function(e) {
            void 0 === e.cache && (e.cache = !1),
              e.crossDomain && (e.type = 'GET')
          }),
          S.ajaxTransport('script', function(e) {
            var t, n
            if (e.crossDomain)
              return {
                send: function(r, o) {
                  ;(t = S('<script>')
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      'load error',
                      (n = function(e) {
                        t.remove(),
                          (n = null),
                          e && o('error' === e.type ? 404 : 200, e.type)
                      })
                    )),
                    a.head.appendChild(t[0])
                },
                abort: function() {
                  n && n()
                }
              }
          })
        var _t,
          Xt = [],
          Ut = /(=)\?(?=&|$)|\?\?/
        S.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function() {
            var e = Xt.pop() || S.expando + '_' + Tt++
            return (this[e] = !0), e
          }
        }),
          S.ajaxPrefilter('json jsonp', function(e, t, r) {
            var o,
              i,
              a,
              s =
                !1 !== e.jsonp &&
                (Ut.test(e.url)
                  ? 'url'
                  : 'string' == typeof e.data &&
                    0 ===
                      (e.contentType || '').indexOf(
                        'application/x-www-form-urlencoded'
                      ) &&
                    Ut.test(e.data) &&
                    'data')
            if (s || 'jsonp' === e.dataTypes[0])
              return (
                (o = e.jsonpCallback = y(e.jsonpCallback)
                  ? e.jsonpCallback()
                  : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(Ut, '$1' + o))
                  : !1 !== e.jsonp &&
                    (e.url += (St.test(e.url) ? '&' : '?') + e.jsonp + '=' + o),
                (e.converters['script json'] = function() {
                  return a || S.error(o + ' was not called'), a[0]
                }),
                (e.dataTypes[0] = 'json'),
                (i = n[o]),
                (n[o] = function() {
                  a = arguments
                }),
                r.always(function() {
                  void 0 === i ? S(n).removeProp(o) : (n[o] = i),
                    e[o] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(o)),
                    a && y(i) && i(a[0]),
                    (a = i = void 0)
                }),
                'script'
              )
          }),
          (m.createHTMLDocument = (((_t = a.implementation.createHTMLDocument(
            ''
          ).body).innerHTML = '<form></form><form></form>'),
          2 === _t.childNodes.length)),
          (S.parseHTML = function(e, t, n) {
            return 'string' != typeof e
              ? []
              : ('boolean' == typeof t && ((n = t), (t = !1)),
                t ||
                  (m.createHTMLDocument
                    ? (((r = (t = a.implementation.createHTMLDocument(
                        ''
                      )).createElement('base')).href = a.location.href),
                      t.head.appendChild(r))
                    : (t = a)),
                (i = !n && []),
                (o = j.exec(e))
                  ? [t.createElement(o[1])]
                  : ((o = we([e], t, i)),
                    i && i.length && S(i).remove(),
                    S.merge([], o.childNodes)))
            var r, o, i
          }),
          (S.fn.load = function(e, t, n) {
            var r,
              o,
              i,
              a = this,
              s = e.indexOf(' ')
            return (
              s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
              y(t)
                ? ((n = t), (t = void 0))
                : t && 'object' == typeof t && (o = 'POST'),
              a.length > 0 &&
                S.ajax({ url: e, type: o || 'GET', dataType: 'html', data: t })
                  .done(function(e) {
                    ;(i = arguments),
                      a.html(
                        r
                          ? S('<div>')
                              .append(S.parseHTML(e))
                              .find(r)
                          : e
                      )
                  })
                  .always(
                    n &&
                      function(e, t) {
                        a.each(function() {
                          n.apply(this, i || [e.responseText, t, e])
                        })
                      }
                  ),
              this
            )
          }),
          S.each(
            [
              'ajaxStart',
              'ajaxStop',
              'ajaxComplete',
              'ajaxError',
              'ajaxSuccess',
              'ajaxSend'
            ],
            function(e, t) {
              S.fn[t] = function(e) {
                return this.on(t, e)
              }
            }
          ),
          (S.expr.pseudos.animated = function(e) {
            return S.grep(S.timers, function(t) {
              return e === t.elem
            }).length
          }),
          (S.offset = {
            setOffset: function(e, t, n) {
              var r,
                o,
                i,
                a,
                s,
                l,
                c = S.css(e, 'position'),
                u = S(e),
                f = {}
              'static' === c && (e.style.position = 'relative'),
                (s = u.offset()),
                (i = S.css(e, 'top')),
                (l = S.css(e, 'left')),
                ('absolute' === c || 'fixed' === c) &&
                (i + l).indexOf('auto') > -1
                  ? ((a = (r = u.position()).top), (o = r.left))
                  : ((a = parseFloat(i) || 0), (o = parseFloat(l) || 0)),
                y(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + o),
                'using' in t ? t.using.call(e, f) : u.css(f)
            }
          }),
          S.fn.extend({
            offset: function(e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function(t) {
                      S.offset.setOffset(this, e, t)
                    })
              var t,
                n,
                r = this[0]
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    {
                      top: t.top + n.pageYOffset,
                      left: t.left + n.pageXOffset
                    })
                  : { top: 0, left: 0 }
                : void 0
            },
            position: function() {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  o = { top: 0, left: 0 }
                if ('fixed' === S.css(r, 'position'))
                  t = r.getBoundingClientRect()
                else {
                  for (
                    t = this.offset(),
                      n = r.ownerDocument,
                      e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    'static' === S.css(e, 'position');

                  )
                    e = e.parentNode
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((o = S(e).offset()).top += S.css(
                      e,
                      'borderTopWidth',
                      !0
                    )),
                    (o.left += S.css(e, 'borderLeftWidth', !0)))
                }
                return {
                  top: t.top - o.top - S.css(r, 'marginTop', !0),
                  left: t.left - o.left - S.css(r, 'marginLeft', !0)
                }
              }
            },
            offsetParent: function() {
              return this.map(function() {
                for (
                  var e = this.offsetParent;
                  e && 'static' === S.css(e, 'position');

                )
                  e = e.offsetParent
                return e || Te
              })
            }
          }),
          S.each(
            { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
            function(e, t) {
              var n = 'pageYOffset' === t
              S.fn[e] = function(r) {
                return X(
                  this,
                  function(e, r, o) {
                    var i
                    if (
                      (x(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                      void 0 === o)
                    )
                      return i ? i[t] : e[r]
                    i
                      ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                      : (e[r] = o)
                  },
                  e,
                  r,
                  arguments.length
                )
              }
            }
          ),
          S.each(['top', 'left'], function(e, t) {
            S.cssHooks[t] = _e(m.pixelPosition, function(e, n) {
              if (n)
                return (
                  (n = $e(e, t)), Fe.test(n) ? S(e).position()[t] + 'px' : n
                )
            })
          }),
          S.each({ Height: 'height', Width: 'width' }, function(e, t) {
            S.each(
              { padding: 'inner' + e, content: t, '': 'outer' + e },
              function(n, r) {
                S.fn[r] = function(o, i) {
                  var a = arguments.length && (n || 'boolean' != typeof o),
                    s = n || (!0 === o || !0 === i ? 'margin' : 'border')
                  return X(
                    this,
                    function(t, n, o) {
                      var i
                      return x(t)
                        ? 0 === r.indexOf('outer')
                          ? t['inner' + e]
                          : t.document.documentElement['client' + e]
                        : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body['scroll' + e],
                              i['scroll' + e],
                              t.body['offset' + e],
                              i['offset' + e],
                              i['client' + e]
                            ))
                          : void 0 === o
                            ? S.css(t, n, s)
                            : S.style(t, n, o, s)
                    },
                    t,
                    a ? o : void 0,
                    a
                  )
                }
              }
            )
          }),
          S.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
              ' '
            ),
            function(e, t) {
              S.fn[t] = function(e, n) {
                return arguments.length > 0
                  ? this.on(t, null, e, n)
                  : this.trigger(t)
              }
            }
          ),
          S.fn.extend({
            hover: function(e, t) {
              return this.mouseenter(e).mouseleave(t || e)
            }
          }),
          S.fn.extend({
            bind: function(e, t, n) {
              return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
              return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
              return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
              return 1 === arguments.length
                ? this.off(e, '**')
                : this.off(t, e || '**', n)
            }
          }),
          (S.proxy = function(e, t) {
            var n, r, o
            if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
              return (
                (r = l.call(arguments, 2)),
                ((o = function() {
                  return e.apply(t || this, r.concat(l.call(arguments)))
                }).guid = e.guid = e.guid || S.guid++),
                o
              )
          }),
          (S.holdReady = function(e) {
            e ? S.readyWait++ : S.ready(!0)
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = L),
          (S.isFunction = y),
          (S.isWindow = x),
          (S.camelCase = G),
          (S.type = T),
          (S.now = Date.now),
          (S.isNumeric = function(e) {
            var t = S.type(e)
            return (
              ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
            )
          }),
          void 0 ===
            (r = function() {
              return S
            }.apply(t, [])) || (e.exports = r)
        var Vt = n.jQuery,
          Yt = n.$
        return (
          (S.noConflict = function(e) {
            return (
              n.$ === S && (n.$ = Yt), e && n.jQuery === S && (n.jQuery = Vt), S
            )
          }),
          o || (n.jQuery = n.$ = S),
          S
        )
      })
    },
    149: function(e, t, n) {
      var r, o
      !(function(i, a) {
        'use strict'
        ;(r = [n(148)]),
          void 0 ===
            (o = function(e) {
              return (function(e, t, n, r, o) {
                var i = 'fullpage-wrapper',
                  a = '.' + i,
                  s = 'fp-responsive',
                  l = 'fp-notransition',
                  c = 'fp-destroyed',
                  u = 'fp-enabled',
                  f = 'fp-viewing',
                  d = 'active',
                  p = '.' + d,
                  h = 'fp-completely',
                  v = '.' + h,
                  g = 'fp-section',
                  m = '.' + g,
                  y = m + p,
                  x = m + ':first',
                  b = m + ':last',
                  w = 'fp-tableCell',
                  T = '.' + w,
                  S = 'fp-auto-height',
                  C = 'fp-normal-scroll',
                  k = 'fp-nav',
                  E = '#' + k,
                  A = 'fp-tooltip',
                  D = '.' + A,
                  N = 'fp-show-active',
                  L = 'fp-slide',
                  j = '.' + L,
                  q = j + p,
                  O = 'fp-slides',
                  H = '.' + O,
                  M = 'fp-slidesContainer',
                  R = '.' + M,
                  I = 'fp-table',
                  P = 'fp-slidesNav',
                  B = '.' + P,
                  F = B + ' a',
                  W = '.fp-controlArrow',
                  z = 'fp-prev',
                  $ = 'fp-controlArrow ' + z,
                  _ = W + '.' + z,
                  X = 'fp-controlArrow fp-next',
                  U = W + '.fp-next',
                  V = e(t),
                  Y = e(n)
                e.fn.fullpage = function(G) {
                  if (e('html').hasClass(u)) Qt()
                  else {
                    var K = e('html, body'),
                      J = e('body'),
                      Q = e.fn.fullpage
                    G = e.extend(
                      {
                        menu: !1,
                        anchors: [],
                        lockAnchors: !1,
                        navigation: !1,
                        navigationPosition: 'right',
                        navigationTooltips: [],
                        showActiveTooltip: !1,
                        slidesNavigation: !1,
                        slidesNavPosition: 'bottom',
                        scrollBar: !1,
                        hybrid: !1,
                        css3: !0,
                        scrollingSpeed: 700,
                        autoScrolling: !0,
                        fitToSection: !0,
                        fitToSectionDelay: 1e3,
                        easing: 'easeInOutCubic',
                        easingcss3: 'ease',
                        loopBottom: !1,
                        loopTop: !1,
                        loopHorizontal: !0,
                        continuousVertical: !1,
                        continuousHorizontal: !1,
                        scrollHorizontally: !1,
                        interlockedSlides: !1,
                        dragAndMove: !1,
                        offsetSections: !1,
                        resetSliders: !1,
                        fadingEffect: !1,
                        normalScrollElements: null,
                        scrollOverflow: !1,
                        scrollOverflowReset: !1,
                        scrollOverflowHandler: e.fn.fp_scrolloverflow
                          ? e.fn.fp_scrolloverflow.iscrollHandler
                          : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        normalScrollElementTouchThreshold: 5,
                        bigSectionsDestination: null,
                        keyboardScrolling: !0,
                        animateAnchor: !0,
                        recordHistory: !0,
                        controlArrows: !0,
                        controlArrowColor: '#fff',
                        verticalCentered: !0,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: !1,
                        parallax: !1,
                        parallaxOptions: {
                          type: 'reveal',
                          percentage: 62,
                          property: 'translate'
                        },
                        sectionSelector: '.section',
                        slideSelector: '.slide',
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: !0
                      },
                      G
                    )
                    var Z,
                      ee,
                      te,
                      ne,
                      re = !1,
                      oe = navigator.userAgent.match(
                        /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
                      ),
                      ie =
                        'ontouchstart' in t ||
                        navigator.msMaxTouchPoints > 0 ||
                        navigator.maxTouchPoints,
                      ae = e(this),
                      se = V.height(),
                      le = !1,
                      ce = !0,
                      ue = !0,
                      fe = [],
                      de = { m: { up: !0, down: !0, left: !0, right: !0 } }
                    de.k = e.extend(!0, {}, de.m)
                    var pe,
                      he,
                      ve,
                      ge,
                      me,
                      ye,
                      xe,
                      be = (function() {
                        var e
                        e = t.PointerEvent
                          ? { down: 'pointerdown', move: 'pointermove' }
                          : { down: 'MSPointerDown', move: 'MSPointerMove' }
                        return e
                      })(),
                      we = {
                        touchmove: 'ontouchmove' in t ? 'touchmove' : be.move,
                        touchstart: 'ontouchstart' in t ? 'touchstart' : be.down
                      },
                      Te =
                        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                      Se = e.extend(!0, {}, G)
                    Qt(),
                      e.extend(e.easing, {
                        easeInOutCubic: function(e, t, n, r, o) {
                          return (t /= o / 2) < 1
                            ? (r / 2) * t * t * t + n
                            : (r / 2) * ((t -= 2) * t * t + 2) + n
                        }
                      }),
                      e(this).length &&
                        ((Q.version = '2.9.6'),
                        (Q.setAutoScrolling = He),
                        (Q.setRecordHistory = Me),
                        (Q.setScrollingSpeed = Re),
                        (Q.setFitToSection = Ie),
                        (Q.setLockAnchors = function(e) {
                          G.lockAnchors = e
                        }),
                        (Q.setMouseWheelScrolling = Pe),
                        (Q.setAllowScrolling = Be),
                        (Q.setKeyboardScrolling = Fe),
                        (Q.moveSectionUp = We),
                        (Q.moveSectionDown = ze),
                        (Q.silentMoveTo = $e),
                        (Q.moveTo = _e),
                        (Q.moveSlideRight = Xe),
                        (Q.moveSlideLeft = Ue),
                        (Q.fitToSection = Je),
                        (Q.reBuild = Ve),
                        (Q.setResponsive = Ye),
                        (Q.destroy = function(t) {
                          He(!1, 'internal'),
                            Be(!1),
                            Fe(!1),
                            ae.addClass(c),
                            clearTimeout(ge),
                            clearTimeout(ve),
                            clearTimeout(he),
                            clearTimeout(me),
                            clearTimeout(ye),
                            V.off('scroll', Ke)
                              .off('hashchange', gt)
                              .off('resize', Lt),
                            Y.off('keydown', yt)
                              .off('keyup', bt)
                              .off('click touchstart', E + ' a')
                              .off('mouseenter', E + ' li')
                              .off('mouseleave', E + ' li')
                              .off('click touchstart', F)
                              .off('mouseover', G.normalScrollElements)
                              .off('mouseout', G.normalScrollElements),
                            e(m).off('click touchstart', W),
                            clearTimeout(ge),
                            clearTimeout(ve),
                            t &&
                              (function() {
                                Yt(0),
                                  ae
                                    .find(
                                      'img[data-src], source[data-src], audio[data-src], iframe[data-src]'
                                    )
                                    .each(function() {
                                      ct(e(this), 'src')
                                    }),
                                  ae.find('img[data-srcset]').each(function() {
                                    ct(e(this), 'srcset')
                                  }),
                                  e(E + ', ' + B + ', ' + W).remove(),
                                  e(m).css({
                                    height: '',
                                    'background-color': '',
                                    padding: ''
                                  }),
                                  e(j).css({ width: '' }),
                                  ae.css({
                                    height: '',
                                    position: '',
                                    '-ms-touch-action': '',
                                    'touch-action': ''
                                  }),
                                  K.css({ overflow: '', height: '' }),
                                  e('html').removeClass(u),
                                  J.removeClass(s),
                                  e.each(
                                    J.get(0).className.split(/\s+/),
                                    function(e, t) {
                                      0 === t.indexOf(f) && J.removeClass(t)
                                    }
                                  ),
                                  e(m + ', ' + j).each(function() {
                                    G.scrollOverflowHandler &&
                                      G.scrollOverflowHandler.remove(e(this)),
                                      e(this).removeClass(I + ' ' + d),
                                      e(this).attr(
                                        'style',
                                        e(this).data('fp-styles')
                                      )
                                  }),
                                  Ot(ae),
                                  ae
                                    .find(T + ', ' + R + ', ' + H)
                                    .each(function() {
                                      e(this).replaceWith(this.childNodes)
                                    }),
                                  ae.css({
                                    '-webkit-transition': 'none',
                                    transition: 'none'
                                  }),
                                  K.scrollTop(0)
                                var t = [g, L, M]
                                e.each(t, function(t, n) {
                                  e('.' + n).removeClass(n)
                                })
                              })()
                        }),
                        (Q.shared = { afterRenderActions: Ge }),
                        (function() {
                          G.css3 &&
                            (G.css3 = (function() {
                              var e,
                                r = n.createElement('p'),
                                i = {
                                  webkitTransform: '-webkit-transform',
                                  OTransform: '-o-transform',
                                  msTransform: '-ms-transform',
                                  MozTransform: '-moz-transform',
                                  transform: 'transform'
                                }
                              for (var a in (n.body.insertBefore(r, null), i))
                                r.style[a] !== o &&
                                  ((r.style[a] = 'translate3d(1px,1px,1px)'),
                                  (e = t
                                    .getComputedStyle(r)
                                    .getPropertyValue(i[a])))
                              return (
                                n.body.removeChild(r),
                                e !== o && e.length > 0 && 'none' !== e
                              )
                            })())
                          ;(G.scrollBar = G.scrollBar || G.hybrid),
                            (r = ae.find(G.sectionSelector)),
                            G.anchors.length ||
                              (G.anchors = r
                                .filter('[data-anchor]')
                                .map(function() {
                                  return e(this)
                                    .data('anchor')
                                    .toString()
                                })
                                .get()),
                            G.navigationTooltips.length ||
                              (G.navigationTooltips = r
                                .filter('[data-tooltip]')
                                .map(function() {
                                  return e(this)
                                    .data('tooltip')
                                    .toString()
                                })
                                .get()),
                            ae.css({ height: '100%', position: 'relative' }),
                            ae.addClass(i),
                            e('html').addClass(u),
                            (se = V.height()),
                            ae.removeClass(c),
                            ae.find(G.sectionSelector).addClass(g),
                            ae.find(G.slideSelector).addClass(L),
                            e(m).each(function(t) {
                              var n = e(this),
                                r = n.find(j),
                                o = r.length
                              n.data('fp-styles', n.attr('style')),
                                (function(t, n) {
                                  n || 0 !== e(y).length || t.addClass(d),
                                    (ne = e(y)),
                                    t.css('height', se + 'px'),
                                    G.paddingTop &&
                                      t.css('padding-top', G.paddingTop),
                                    G.paddingBottom &&
                                      t.css('padding-bottom', G.paddingBottom),
                                    void 0 !== G.sectionsColor[n] &&
                                      t.css(
                                        'background-color',
                                        G.sectionsColor[n]
                                      ),
                                    void 0 !== G.anchors[n] &&
                                      t.attr('data-anchor', G.anchors[n])
                                })(n, t),
                                (function(t, n) {
                                  void 0 !== G.anchors[n] &&
                                    t.hasClass(d) &&
                                    Ht(G.anchors[n], n),
                                    G.menu &&
                                      G.css3 &&
                                      e(G.menu).closest(a).length &&
                                      e(G.menu).appendTo(J)
                                })(n, t),
                                o > 0
                                  ? (function(t, n, r) {
                                      var o = 100 * r,
                                        i = 100 / r
                                      n.wrapAll('<div class="' + M + '" />'),
                                        n
                                          .parent()
                                          .wrap('<div class="' + O + '" />'),
                                        t.find(R).css('width', o + '%'),
                                        r > 1 &&
                                          (G.controlArrows &&
                                            (function(e) {
                                              e
                                                .find(H)
                                                .after(
                                                  '<div class="' +
                                                    $ +
                                                    '"></div><div class="' +
                                                    X +
                                                    '"></div>'
                                                ),
                                                '#fff' != G.controlArrowColor &&
                                                  (e
                                                    .find(U)
                                                    .css(
                                                      'border-color',
                                                      'transparent transparent transparent ' +
                                                        G.controlArrowColor
                                                    ),
                                                  e
                                                    .find(_)
                                                    .css(
                                                      'border-color',
                                                      'transparent ' +
                                                        G.controlArrowColor +
                                                        ' transparent transparent'
                                                    )),
                                                G.loopHorizontal ||
                                                  e.find(_).hide()
                                            })(t),
                                          G.slidesNavigation &&
                                            (function(e, t) {
                                              e.append(
                                                '<div class="' +
                                                  P +
                                                  '"><ul></ul></div>'
                                              )
                                              var n = e.find(B)
                                              n.addClass(G.slidesNavPosition)
                                              for (var r = 0; r < t; r++)
                                                n.find('ul').append(
                                                  '<li><a href="#"><span></span></a></li>'
                                                )
                                              n.css(
                                                'margin-left',
                                                '-' + n.width() / 2 + 'px'
                                              ),
                                                n
                                                  .find('li')
                                                  .first()
                                                  .find('a')
                                                  .addClass(d)
                                            })(t, r)),
                                        n.each(function(t) {
                                          e(this).css('width', i + '%'),
                                            G.verticalCentered && Rt(e(this))
                                        })
                                      var a = t.find(q)
                                      a.length &&
                                      (0 !== e(y).index(m) ||
                                        (0 === e(y).index(m) &&
                                          0 !== a.index()))
                                        ? Vt(a, 'internal')
                                        : n.eq(0).addClass(d)
                                    })(n, r, o)
                                  : G.verticalCentered && Rt(n)
                            }),
                            G.fixedElements &&
                              G.css3 &&
                              e(G.fixedElements).appendTo(J),
                            G.navigation &&
                              (function() {
                                J.append('<div id="' + k + '"><ul></ul></div>')
                                var t = e(E)
                                t.addClass(function() {
                                  return G.showActiveTooltip
                                    ? N + ' ' + G.navigationPosition
                                    : G.navigationPosition
                                })
                                for (var n = 0; n < e(m).length; n++) {
                                  var r = ''
                                  G.anchors.length && (r = G.anchors[n])
                                  var o =
                                      '<li><a href="#' +
                                      r +
                                      '"><span></span></a>',
                                    i = G.navigationTooltips[n]
                                  void 0 !== i &&
                                    '' !== i &&
                                    (o +=
                                      '<div class="' +
                                      A +
                                      ' ' +
                                      G.navigationPosition +
                                      '">' +
                                      i +
                                      '</div>'),
                                    (o += '</li>'),
                                    t.find('ul').append(o)
                                }
                                e(E).css(
                                  'margin-top',
                                  '-' + e(E).height() / 2 + 'px'
                                ),
                                  e(E)
                                    .find('li')
                                    .eq(e(y).index(m))
                                    .find('a')
                                    .addClass(d)
                              })(),
                            ae
                              .find('iframe[src*="youtube.com/embed/"]')
                              .each(function() {
                                var t, n, r
                                ;(t = e(this)),
                                  (n = 'enablejsapi=1'),
                                  (r = t.attr('src')),
                                  t.attr(
                                    'src',
                                    r + (/\?/.test(r) ? '&' : '?') + n
                                  )
                              }),
                            G.scrollOverflow
                              ? (pe = G.scrollOverflowHandler.init(G))
                              : Ge(),
                            Be(!0),
                            He(G.autoScrolling, 'internal'),
                            jt(),
                            Xt(),
                            'complete' === n.readyState && vt()
                          var r
                          V.on('load', vt)
                        })(),
                        V.on('scroll', Ke)
                          .on('hashchange', gt)
                          .blur(Ct)
                          .resize(Lt),
                        Y.keydown(yt)
                          .keyup(bt)
                          .on('click touchstart', E + ' a', kt)
                          .on('click touchstart', F, Et)
                          .on('click', D, xt),
                        e(m).on('click touchstart', W, St),
                        G.normalScrollElements &&
                          (Y.on(
                            'mouseenter touchstart',
                            G.normalScrollElements,
                            function() {
                              Be(!1)
                            }
                          ),
                          Y.on(
                            'mouseleave touchend',
                            G.normalScrollElements,
                            function() {
                              Be(!0)
                            }
                          )))
                    var Ce = !1,
                      ke = 0,
                      Ee = 0,
                      Ae = 0,
                      De = 0,
                      Ne = 0,
                      Le = new Date().getTime(),
                      je = 0,
                      qe = 0,
                      Oe = se
                  }
                  function He(t, n) {
                    t || Yt(0), Jt('autoScrolling', t, n)
                    var r = e(y)
                    G.autoScrolling && !G.scrollBar
                      ? (K.css({ overflow: 'hidden', height: '100%' }),
                        Me(Se.recordHistory, 'internal'),
                        ae.css({
                          '-ms-touch-action': 'none',
                          'touch-action': 'none'
                        }),
                        r.length && Yt(r.position().top))
                      : (K.css({ overflow: 'visible', height: 'initial' }),
                        Me(!1, 'internal'),
                        ae.css({ '-ms-touch-action': '', 'touch-action': '' }),
                        r.length && K.scrollTop(r.position().top))
                  }
                  function Me(e, t) {
                    Jt('recordHistory', e, t)
                  }
                  function Re(e, t) {
                    Jt('scrollingSpeed', e, t)
                  }
                  function Ie(e, t) {
                    Jt('fitToSection', e, t)
                  }
                  function Pe(e) {
                    e
                      ? (!(function() {
                          var e,
                            r = ''
                          t.addEventListener
                            ? (e = 'addEventListener')
                            : ((e = 'attachEvent'), (r = 'on'))
                          var i =
                            'onwheel' in n.createElement('div')
                              ? 'wheel'
                              : n.onmousewheel !== o
                                ? 'mousewheel'
                                : 'DOMMouseScroll'
                          'DOMMouseScroll' == i
                            ? n[e](r + 'MozMousePixelScroll', ot, !1)
                            : n[e](r + i, ot, !1)
                        })(),
                        ae.on('mousedown', wt).on('mouseup', Tt))
                      : (n.addEventListener
                          ? (n.removeEventListener('mousewheel', ot, !1),
                            n.removeEventListener('wheel', ot, !1),
                            n.removeEventListener(
                              'MozMousePixelScroll',
                              ot,
                              !1
                            ))
                          : n.detachEvent('onmousewheel', ot),
                        ae.off('mousedown', wt).off('mouseup', Tt))
                  }
                  function Be(t, n) {
                    void 0 !== n
                      ? ((n = n.replace(/ /g, '').split(',')),
                        e.each(n, function(e, n) {
                          Kt(t, n, 'm')
                        }))
                      : (Kt(t, 'all', 'm'),
                        t
                          ? (Pe(!0),
                            (oe || ie) &&
                              (G.autoScrolling &&
                                J.off(we.touchmove).on(we.touchmove, Ze),
                              e(a)
                                .off(we.touchstart)
                                .on(we.touchstart, nt)
                                .off(we.touchmove)
                                .on(we.touchmove, et)))
                          : (Pe(!1),
                            (oe || ie) &&
                              (G.autoScrolling && J.off(we.touchmove),
                              e(a)
                                .off(we.touchstart)
                                .off(we.touchmove))))
                  }
                  function Fe(t, n) {
                    void 0 !== n
                      ? ((n = n.replace(/ /g, '').split(',')),
                        e.each(n, function(e, n) {
                          Kt(t, n, 'k')
                        }))
                      : (Kt(t, 'all', 'k'), (G.keyboardScrolling = t))
                  }
                  function We() {
                    var t = e(y).prev(m)
                    t.length ||
                      (!G.loopTop && !G.continuousVertical) ||
                      (t = e(m).last()),
                      t.length && st(t, null, !0)
                  }
                  function ze() {
                    var t = e(y).next(m)
                    t.length ||
                      (!G.loopBottom && !G.continuousVertical) ||
                      (t = e(m).first()),
                      t.length && st(t, null, !1)
                  }
                  function $e(e, t) {
                    Re(0, 'internal'),
                      _e(e, t),
                      Re(Se.scrollingSpeed, 'internal')
                  }
                  function _e(e, t) {
                    var n = Bt(e)
                    void 0 !== t ? Ft(e, t) : n.length > 0 && st(n)
                  }
                  function Xe(e) {
                    it('right', e)
                  }
                  function Ue(e) {
                    it('left', e)
                  }
                  function Ve(t) {
                    if (!ae.hasClass(c)) {
                      ;(le = !0),
                        (se = V.height()),
                        e(m).each(function() {
                          var t = e(this).find(H),
                            n = e(this).find(j)
                          G.verticalCentered &&
                            e(this)
                              .find(T)
                              .css('height', It(e(this)) + 'px'),
                            e(this).css('height', se + 'px'),
                            n.length > 1 && Dt(t, t.find(q))
                        }),
                        G.scrollOverflow && pe.createScrollBarForAll()
                      var n = e(y),
                        r = n.index(m)
                      r && $e(r + 1),
                        (le = !1),
                        e.isFunction(G.afterResize) &&
                          t &&
                          G.afterResize.call(ae),
                        e.isFunction(G.afterReBuild) &&
                          !t &&
                          G.afterReBuild.call(ae)
                    }
                  }
                  function Ye(t) {
                    var n = J.hasClass(s)
                    t
                      ? n ||
                        (He(!1, 'internal'),
                        Ie(!1, 'internal'),
                        e(E).hide(),
                        J.addClass(s),
                        e.isFunction(G.afterResponsive) &&
                          G.afterResponsive.call(ae, t))
                      : n &&
                        (He(Se.autoScrolling, 'internal'),
                        Ie(Se.autoScrolling, 'internal'),
                        e(E).show(),
                        J.removeClass(s),
                        e.isFunction(G.afterResponsive) &&
                          G.afterResponsive.call(ae, t))
                  }
                  function Ge() {
                    var t,
                      n = e(y)
                    n.addClass(h),
                      ut(n),
                      ft(n),
                      G.scrollOverflow && G.scrollOverflowHandler.afterLoad(),
                      (!(t = Bt(mt().section)) ||
                        (t.length && t.index() === ne.index())) &&
                        e.isFunction(G.afterLoad) &&
                        G.afterLoad.call(n, n.data('anchor'), n.index(m) + 1),
                      e.isFunction(G.afterRender) && G.afterRender.call(ae)
                  }
                  function Ke() {
                    var t
                    if (!G.autoScrolling || G.scrollBar) {
                      var r = V.scrollTop(),
                        o = (function(e) {
                          var t = e > ke ? 'down' : 'up'
                          return (ke = e), (je = e), t
                        })(r),
                        i = 0,
                        a = r + V.height() / 2,
                        s = J.height() - V.height() === r,
                        l = n.querySelectorAll(m)
                      if (s) i = l.length - 1
                      else if (r)
                        for (var c = 0; c < l.length; ++c) {
                          var u = l[c]
                          u.offsetTop <= a && (i = c)
                        }
                      else i = 0
                      if (
                        ((function(t) {
                          var n = e(y).position().top,
                            r = n + V.height()
                          if ('up' == t) return r >= V.scrollTop() + V.height()
                          return n <= V.scrollTop()
                        })(o) &&
                          (e(y).hasClass(h) ||
                            e(y)
                              .addClass(h)
                              .siblings()
                              .removeClass(h)),
                        !(t = e(l).eq(i)).hasClass(d))
                      ) {
                        Ce = !0
                        var f,
                          p,
                          v = e(y),
                          g = v.index(m) + 1,
                          x = Mt(t),
                          b = t.data('anchor'),
                          w = t.index(m) + 1,
                          T = t.find(q)
                        T.length && ((p = T.data('anchor')), (f = T.index())),
                          ue &&
                            (t
                              .addClass(d)
                              .siblings()
                              .removeClass(d),
                            e.isFunction(G.onLeave) &&
                              G.onLeave.call(v, g, w, x),
                            e.isFunction(G.afterLoad) &&
                              G.afterLoad.call(t, b, w),
                            pt(v),
                            ut(t),
                            ft(t),
                            Ht(b, w - 1),
                            G.anchors.length && (Z = b),
                            zt(f, p, b, w)),
                          clearTimeout(me),
                          (me = setTimeout(function() {
                            Ce = !1
                          }, 100))
                      }
                      G.fitToSection &&
                        (clearTimeout(ye),
                        (ye = setTimeout(function() {
                          G.fitToSection && e(y).outerHeight() <= se && Je()
                        }, G.fitToSectionDelay)))
                    }
                  }
                  function Je() {
                    ue && ((le = !0), st(e(y)), (le = !1))
                  }
                  function Qe(t) {
                    if (de.m[t]) {
                      var n = 'down' === t ? ze : We
                      if (G.scrollOverflow) {
                        var r = G.scrollOverflowHandler.scrollable(e(y)),
                          o = 'down' === t ? 'bottom' : 'top'
                        if (r.length > 0) {
                          if (!G.scrollOverflowHandler.isScrolled(o, r))
                            return !0
                          n()
                        } else n()
                      } else n()
                    }
                  }
                  function Ze(e) {
                    var t = e.originalEvent
                    G.autoScrolling && tt(t) && e.preventDefault()
                  }
                  function et(t) {
                    var n = t.originalEvent,
                      o = e(n.target).closest(m)
                    if (tt(n)) {
                      G.autoScrolling && t.preventDefault()
                      var i = Ut(n)
                      ;(De = i.y),
                        (Ne = i.x),
                        o.find(H).length && r.abs(Ae - Ne) > r.abs(Ee - De)
                          ? !re &&
                            r.abs(Ae - Ne) >
                              (V.outerWidth() / 100) * G.touchSensitivity &&
                            (Ae > Ne ? de.m.right && Xe(o) : de.m.left && Ue(o))
                          : G.autoScrolling &&
                            ue &&
                            r.abs(Ee - De) >
                              (V.height() / 100) * G.touchSensitivity &&
                            (Ee > De ? Qe('down') : De > Ee && Qe('up'))
                    }
                  }
                  function tt(e) {
                    return void 0 === e.pointerType || 'mouse' != e.pointerType
                  }
                  function nt(e) {
                    var t = e.originalEvent
                    if ((G.fitToSection && K.stop(), tt(t))) {
                      var n = Ut(t)
                      ;(Ee = n.y), (Ae = n.x)
                    }
                  }
                  function rt(e, t) {
                    for (
                      var n = 0, o = e.slice(r.max(e.length - t, 1)), i = 0;
                      i < o.length;
                      i++
                    )
                      n += o[i]
                    return r.ceil(n / t)
                  }
                  function ot(n) {
                    var o = new Date().getTime(),
                      i = e(v).hasClass(C)
                    if (G.autoScrolling && !te && !i) {
                      var a =
                          (n = n || t.event).wheelDelta ||
                          -n.deltaY ||
                          -n.detail,
                        s = r.max(-1, r.min(1, a)),
                        l = void 0 !== n.wheelDeltaX || void 0 !== n.deltaX,
                        c =
                          r.abs(n.wheelDeltaX) < r.abs(n.wheelDelta) ||
                          r.abs(n.deltaX) < r.abs(n.deltaY) ||
                          !l
                      fe.length > 149 && fe.shift(),
                        fe.push(r.abs(a)),
                        G.scrollBar &&
                          (n.preventDefault
                            ? n.preventDefault()
                            : (n.returnValue = !1))
                      var u = o - Le
                      if (((Le = o), u > 200 && (fe = []), ue)) {
                        var f = rt(fe, 10),
                          d = rt(fe, 70),
                          p = f >= d
                        p && c && Qe(s < 0 ? 'down' : 'up')
                      }
                      return !1
                    }
                    G.fitToSection && K.stop()
                  }
                  function it(t, n) {
                    var r = void 0 === n ? e(y) : n,
                      o = r.find(H),
                      i = o.find(j).length
                    if (!(!o.length || re || i < 2)) {
                      var a = o.find(q),
                        s = null
                      if (!(s = 'left' === t ? a.prev(j) : a.next(j)).length) {
                        if (!G.loopHorizontal) return
                        s =
                          'left' === t
                            ? a.siblings(':last')
                            : a.siblings(':first')
                      }
                      ;(re = !0), Dt(o, s, t)
                    }
                  }
                  function at() {
                    e(q).each(function() {
                      Vt(e(this), 'internal')
                    })
                  }
                  function st(t, n, o) {
                    if (void 0 !== t) {
                      var i,
                        s,
                        l = (function(e) {
                          var t = e.position(),
                            n = t.top,
                            r = t.top > je,
                            o = n - se + e.outerHeight(),
                            i = G.bigSectionsDestination
                          e.outerHeight() > se
                            ? ((r || i) && 'bottom' !== i) || (n = o)
                            : (r || (le && e.is(':last-child'))) && (n = o)
                          return (je = n), n
                        })(t),
                        c = {
                          element: t,
                          callback: n,
                          isMovementUp: o,
                          dtop: l,
                          yMovement: Mt(t),
                          anchorLink: t.data('anchor'),
                          sectionIndex: t.index(m),
                          activeSlide: t.find(q),
                          activeSection: e(y),
                          leavingSection: e(y).index(m) + 1,
                          localIsResizing: le
                        }
                      if (
                        !(
                          (c.activeSection.is(t) && !le) ||
                          (G.scrollBar &&
                            V.scrollTop() === c.dtop &&
                            !t.hasClass(S))
                        )
                      ) {
                        if (
                          (c.activeSlide.length &&
                            ((i = c.activeSlide.data('anchor')),
                            (s = c.activeSlide.index())),
                          e.isFunction(G.onLeave) && !c.localIsResizing)
                        ) {
                          var u = c.yMovement
                          if (
                            (void 0 !== o && (u = o ? 'up' : 'down'),
                            !1 ===
                              G.onLeave.call(
                                c.activeSection,
                                c.leavingSection,
                                c.sectionIndex + 1,
                                u
                              ))
                          )
                            return
                        }
                        G.autoScrolling &&
                          G.continuousVertical &&
                          void 0 !== c.isMovementUp &&
                          ((!c.isMovementUp && 'up' == c.yMovement) ||
                            (c.isMovementUp && 'down' == c.yMovement)) &&
                          (c = (function(t) {
                            t.isMovementUp
                              ? e(y).before(t.activeSection.nextAll(m))
                              : e(y).after(
                                  t.activeSection
                                    .prevAll(m)
                                    .get()
                                    .reverse()
                                )
                            return (
                              Yt(e(y).position().top),
                              at(),
                              (t.wrapAroundElements = t.activeSection),
                              (t.dtop = t.element.position().top),
                              (t.yMovement = Mt(t.element)),
                              (t.leavingSection = t.activeSection.index(m) + 1),
                              (t.sectionIndex = t.element.index(m)),
                              t
                            )
                          })(c)),
                          c.localIsResizing || pt(c.activeSection),
                          G.scrollOverflow &&
                            G.scrollOverflowHandler.beforeLeave(),
                          t
                            .addClass(d)
                            .siblings()
                            .removeClass(d),
                          ut(t),
                          G.scrollOverflow && G.scrollOverflowHandler.onLeave(),
                          (ue = !1),
                          zt(s, i, c.anchorLink, c.sectionIndex),
                          (function(t) {
                            if (G.css3 && G.autoScrolling && !G.scrollBar) {
                              var n =
                                'translate3d(0px, -' +
                                r.round(t.dtop) +
                                'px, 0px)'
                              Pt(n, !0),
                                G.scrollingSpeed
                                  ? (clearTimeout(ve),
                                    (ve = setTimeout(function() {
                                      lt(t)
                                    }, G.scrollingSpeed)))
                                  : lt(t)
                            } else {
                              var o = (function(e) {
                                var t = {}
                                G.autoScrolling && !G.scrollBar
                                  ? ((t.options = { top: -e.dtop }),
                                    (t.element = a))
                                  : ((t.options = { scrollTop: e.dtop }),
                                    (t.element = 'html, body'))
                                return t
                              })(t)
                              e(o.element)
                                .animate(o.options, G.scrollingSpeed, G.easing)
                                .promise()
                                .done(function() {
                                  G.scrollBar
                                    ? setTimeout(function() {
                                        lt(t)
                                      }, 30)
                                    : lt(t)
                                })
                            }
                          })(c),
                          (Z = c.anchorLink),
                          Ht(c.anchorLink, c.sectionIndex)
                      }
                    }
                  }
                  function lt(t) {
                    !(function(t) {
                      if (!t.wrapAroundElements || !t.wrapAroundElements.length)
                        return
                      t.isMovementUp
                        ? e(x).before(t.wrapAroundElements)
                        : e(b).after(t.wrapAroundElements)
                      Yt(e(y).position().top), at()
                    })(t),
                      e.isFunction(G.afterLoad) &&
                        !t.localIsResizing &&
                        G.afterLoad.call(
                          t.element,
                          t.anchorLink,
                          t.sectionIndex + 1
                        ),
                      G.scrollOverflow && G.scrollOverflowHandler.afterLoad(),
                      t.localIsResizing || ft(t.element),
                      t.element
                        .addClass(h)
                        .siblings()
                        .removeClass(h),
                      (ue = !0),
                      e.isFunction(t.callback) && t.callback.call(this)
                  }
                  function ct(e, t) {
                    e.attr(t, e.data(t)).removeAttr('data-' + t)
                  }
                  function ut(t) {
                    if (G.lazyLoading) {
                      var n,
                        r = ht(t)
                      r.find(
                        'img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]'
                      ).each(function() {
                        if (
                          ((n = e(this)),
                          e.each(['src', 'srcset'], function(e, t) {
                            var r = n.attr('data-' + t)
                            void 0 !== r && r && ct(n, t)
                          }),
                          n.is('source'))
                        ) {
                          var t = n.closest('video').length ? 'video' : 'audio'
                          n.closest(t)
                            .get(0)
                            .load()
                        }
                      })
                    }
                  }
                  function ft(t) {
                    var n = ht(t)
                    n.find('video, audio').each(function() {
                      var t = e(this).get(0)
                      t.hasAttribute('data-autoplay') &&
                        'function' == typeof t.play &&
                        t.play()
                    }),
                      n
                        .find('iframe[src*="youtube.com/embed/"]')
                        .each(function() {
                          var t = e(this).get(0)
                          t.hasAttribute('data-autoplay') && dt(t),
                            (t.onload = function() {
                              t.hasAttribute('data-autoplay') && dt(t)
                            })
                        })
                  }
                  function dt(e) {
                    e.contentWindow.postMessage(
                      '{"event":"command","func":"playVideo","args":""}',
                      '*'
                    )
                  }
                  function pt(t) {
                    var n = ht(t)
                    n.find('video, audio').each(function() {
                      var t = e(this).get(0)
                      t.hasAttribute('data-keepplaying') ||
                        'function' != typeof t.pause ||
                        t.pause()
                    }),
                      n
                        .find('iframe[src*="youtube.com/embed/"]')
                        .each(function() {
                          var t = e(this).get(0)
                          ;/youtube\.com\/embed\//.test(e(this).attr('src')) &&
                            !t.hasAttribute('data-keepplaying') &&
                            e(this)
                              .get(0)
                              .contentWindow.postMessage(
                                '{"event":"command","func":"pauseVideo","args":""}',
                                '*'
                              )
                        })
                  }
                  function ht(t) {
                    var n = t.find(q)
                    return n.length && (t = e(n)), t
                  }
                  function vt() {
                    var e = mt(),
                      t = e.section,
                      n = e.slide
                    t && (G.animateAnchor ? Ft(t, n) : $e(t, n))
                  }
                  function gt() {
                    if (!Ce && !G.lockAnchors) {
                      var e = mt(),
                        t = e.section,
                        n = e.slide,
                        r = void 0 === Z,
                        o = void 0 === Z && void 0 === n && !re
                      t &&
                        t.length &&
                        ((t && t !== Z && !r) || o || (!re && ee != n)) &&
                        Ft(t, n)
                    }
                  }
                  function mt() {
                    var e,
                      n,
                      r = t.location.hash
                    if (r.length) {
                      var o = r.replace('#', '').split('/'),
                        i = r.indexOf('#/') > -1
                      e = i ? '/' + o[1] : decodeURIComponent(o[0])
                      var a = i ? o[2] : o[1]
                      a && a.length && (n = decodeURIComponent(a))
                    }
                    return { section: e, slide: n }
                  }
                  function yt(t) {
                    clearTimeout(xe)
                    var n = e(':focus'),
                      r = t.which
                    if (9 === r)
                      !(function(t) {
                        var n = t.shiftKey,
                          r = e(':focus'),
                          o = e(y),
                          i = o.find(q),
                          a = (i.length ? i : o).find(Te).not('[tabindex="-1"]')
                        function s(e) {
                          return e.preventDefault(), a.first().focus()
                        }
                        r.length ? r.closest(y, q).length || (r = s(t)) : s(t)
                        ;((!n && r.is(a.last())) || (n && r.is(a.first()))) &&
                          t.preventDefault()
                      })(t)
                    else if (
                      !n.is('textarea') &&
                      !n.is('input') &&
                      !n.is('select') &&
                      'true' !== n.attr('contentEditable') &&
                      '' !== n.attr('contentEditable') &&
                      G.keyboardScrolling &&
                      G.autoScrolling
                    ) {
                      e.inArray(r, [40, 38, 32, 33, 34]) > -1 &&
                        t.preventDefault(),
                        (te = t.ctrlKey),
                        (xe = setTimeout(function() {
                          !(function(t) {
                            var n = t.shiftKey
                            if (!ue && [37, 39].indexOf(t.which) < 0) return
                            switch (t.which) {
                              case 38:
                              case 33:
                                de.k.up && We()
                                break
                              case 32:
                                if (n && de.k.up) {
                                  We()
                                  break
                                }
                              case 40:
                              case 34:
                                de.k.down && ze()
                                break
                              case 36:
                                de.k.up && _e(1)
                                break
                              case 35:
                                de.k.down && _e(e(m).length)
                                break
                              case 37:
                                de.k.left && Ue()
                                break
                              case 39:
                                de.k.right && Xe()
                                break
                              default:
                            }
                          })(t)
                        }, 150))
                    }
                  }
                  function xt() {
                    e(this)
                      .prev()
                      .trigger('click')
                  }
                  function bt(e) {
                    ce && (te = e.ctrlKey)
                  }
                  function wt(e) {
                    2 == e.which && ((qe = e.pageY), ae.on('mousemove', At))
                  }
                  function Tt(e) {
                    2 == e.which && ae.off('mousemove')
                  }
                  function St() {
                    var t = e(this).closest(m)
                    e(this).hasClass(z)
                      ? de.m.left && Ue(t)
                      : de.m.right && Xe(t)
                  }
                  function Ct() {
                    ;(ce = !1), (te = !1)
                  }
                  function kt(t) {
                    t.preventDefault()
                    var n = e(this)
                      .parent()
                      .index()
                    st(e(m).eq(n))
                  }
                  function Et(t) {
                    t.preventDefault()
                    var n = e(this)
                        .closest(m)
                        .find(H),
                      r = n.find(j).eq(
                        e(this)
                          .closest('li')
                          .index()
                      )
                    Dt(n, r)
                  }
                  function At(e) {
                    ue &&
                      (e.pageY < qe && de.m.up
                        ? We()
                        : e.pageY > qe && de.m.down && ze()),
                      (qe = e.pageY)
                  }
                  function Dt(t, n, o) {
                    var i = t.closest(m),
                      a = {
                        slides: t,
                        destiny: n,
                        direction: o,
                        destinyPos: n.position(),
                        slideIndex: n.index(),
                        section: i,
                        sectionIndex: i.index(m),
                        anchorLink: i.data('anchor'),
                        slidesNav: i.find(B),
                        slideAnchor: _t(n),
                        prevSlide: i.find(q),
                        prevSlideIndex: i.find(q).index(),
                        localIsResizing: le
                      }
                    ;(a.xMovement = (function(e, t) {
                      if (e == t) return 'none'
                      if (e > t) return 'left'
                      return 'right'
                    })(a.prevSlideIndex, a.slideIndex)),
                      a.localIsResizing || (ue = !1),
                      G.onSlideLeave &&
                      !a.localIsResizing &&
                      'none' !== a.xMovement &&
                      e.isFunction(G.onSlideLeave) &&
                      !1 ===
                        G.onSlideLeave.call(
                          a.prevSlide,
                          a.anchorLink,
                          a.sectionIndex + 1,
                          a.prevSlideIndex,
                          a.direction,
                          a.slideIndex
                        )
                        ? (re = !1)
                        : (n
                            .addClass(d)
                            .siblings()
                            .removeClass(d),
                          a.localIsResizing || (pt(a.prevSlide), ut(n)),
                          !G.loopHorizontal &&
                            G.controlArrows &&
                            (i.find(_).toggle(0 !== a.slideIndex),
                            i.find(U).toggle(!n.is(':last-child'))),
                          i.hasClass(d) &&
                            !a.localIsResizing &&
                            zt(
                              a.slideIndex,
                              a.slideAnchor,
                              a.anchorLink,
                              a.sectionIndex
                            ),
                          (function(e, t, n) {
                            var o = t.destinyPos
                            if (G.css3) {
                              var i =
                                'translate3d(-' +
                                r.round(o.left) +
                                'px, 0px, 0px)'
                              qt(e.find(R)).css(Gt(i)),
                                (ge = setTimeout(
                                  function() {
                                    n && Nt(t)
                                  },
                                  G.scrollingSpeed,
                                  G.easing
                                ))
                            } else
                              e.animate(
                                { scrollLeft: r.round(o.left) },
                                G.scrollingSpeed,
                                G.easing,
                                function() {
                                  n && Nt(t)
                                }
                              )
                          })(t, a, !0))
                  }
                  function Nt(t) {
                    var n, r
                    ;(n = t.slidesNav),
                      (r = t.slideIndex),
                      n.find(p).removeClass(d),
                      n
                        .find('li')
                        .eq(r)
                        .find('a')
                        .addClass(d),
                      t.localIsResizing ||
                        (e.isFunction(G.afterSlideLoad) &&
                          G.afterSlideLoad.call(
                            t.destiny,
                            t.anchorLink,
                            t.sectionIndex + 1,
                            t.slideAnchor,
                            t.slideIndex
                          ),
                        (ue = !0),
                        ft(t.destiny)),
                      (re = !1)
                  }
                  function Lt() {
                    if ((jt(), oe)) {
                      var t = e(n.activeElement)
                      if (
                        !t.is('textarea') &&
                        !t.is('input') &&
                        !t.is('select')
                      ) {
                        var o = V.height()
                        r.abs(o - Oe) > (20 * r.max(Oe, o)) / 100 &&
                          (Ve(!0), (Oe = o))
                      }
                    } else
                      clearTimeout(he),
                        (he = setTimeout(function() {
                          Ve(!0)
                        }, 350))
                  }
                  function jt() {
                    var e = G.responsive || G.responsiveWidth,
                      t = G.responsiveHeight,
                      n = e && V.outerWidth() < e,
                      r = t && V.height() < t
                    e && t ? Ye(n || r) : e ? Ye(n) : t && Ye(r)
                  }
                  function qt(e) {
                    var t = 'all ' + G.scrollingSpeed + 'ms ' + G.easingcss3
                    return (
                      e.removeClass(l),
                      e.css({ '-webkit-transition': t, transition: t })
                    )
                  }
                  function Ot(e) {
                    return e.addClass(l)
                  }
                  function Ht(t, n) {
                    var r
                    ;(r = t),
                      G.menu &&
                        (e(G.menu)
                          .find(p)
                          .removeClass(d),
                        e(G.menu)
                          .find('[data-menuanchor="' + r + '"]')
                          .addClass(d)),
                      (function(t, n) {
                        G.navigation &&
                          (e(E)
                            .find(p)
                            .removeClass(d),
                          t
                            ? e(E)
                                .find('a[href="#' + t + '"]')
                                .addClass(d)
                            : e(E)
                                .find('li')
                                .eq(n)
                                .find('a')
                                .addClass(d))
                      })(t, n)
                  }
                  function Mt(t) {
                    var n = e(y).index(m),
                      r = t.index(m)
                    return n == r ? 'none' : n > r ? 'up' : 'down'
                  }
                  function Rt(t) {
                    if (!t.hasClass(I)) {
                      var n = e('<div class="' + w + '" />').height(It(t))
                      t.addClass(I).wrapInner(n)
                    }
                  }
                  function It(e) {
                    var t = se
                    if (G.paddingTop || G.paddingBottom) {
                      var n = e
                      n.hasClass(g) || (n = e.closest(m))
                      var r =
                        parseInt(n.css('padding-top')) +
                        parseInt(n.css('padding-bottom'))
                      t = se - r
                    }
                    return t
                  }
                  function Pt(e, t) {
                    t ? qt(ae) : Ot(ae),
                      ae.css(Gt(e)),
                      setTimeout(function() {
                        ae.removeClass(l)
                      }, 10)
                  }
                  function Bt(t) {
                    var n = ae.find(m + '[data-anchor="' + t + '"]')
                    if (!n.length) {
                      var r = void 0 !== t ? t - 1 : 0
                      n = e(m).eq(r)
                    }
                    return n
                  }
                  function Ft(e, t) {
                    var n = Bt(e)
                    if (n.length) {
                      var r = (function(e, t) {
                        var n = t.find(j + '[data-anchor="' + e + '"]')
                        n.length ||
                          ((e = void 0 !== e ? e : 0), (n = t.find(j).eq(e)))
                        return n
                      })(t, n)
                      e === Z || n.hasClass(d)
                        ? Wt(r)
                        : st(n, function() {
                            Wt(r)
                          })
                    }
                  }
                  function Wt(e) {
                    e.length && Dt(e.closest(H), e)
                  }
                  function zt(e, t, n, r) {
                    var o = ''
                    G.anchors.length &&
                      !G.lockAnchors &&
                      (e
                        ? (void 0 !== n && (o = n),
                          void 0 === t && (t = e),
                          (ee = t),
                          $t(o + '/' + t))
                        : void 0 !== e
                          ? ((ee = t), $t(n))
                          : $t(n)),
                      Xt()
                  }
                  function $t(e) {
                    if (G.recordHistory) location.hash = e
                    else if (oe || ie) t.history.replaceState(o, o, '#' + e)
                    else {
                      var n = t.location.href.split('#')[0]
                      t.location.replace(n + '#' + e)
                    }
                  }
                  function _t(e) {
                    var t = e.data('anchor'),
                      n = e.index()
                    return void 0 === t && (t = n), t
                  }
                  function Xt() {
                    var t = e(y),
                      n = t.find(q),
                      r = _t(t),
                      o = _t(n),
                      i = String(r)
                    n.length && (i = i + '-' + o),
                      (i = i.replace('/', '-').replace('#', ''))
                    var a = new RegExp('\\b\\s?' + f + '-[^\\s]+\\b', 'g')
                    ;(J[0].className = J[0].className.replace(a, '')),
                      J.addClass(f + '-' + i)
                  }
                  function Ut(e) {
                    var t = []
                    return (
                      (t.y =
                        void 0 !== e.pageY && (e.pageY || e.pageX)
                          ? e.pageY
                          : e.touches[0].pageY),
                      (t.x =
                        void 0 !== e.pageX && (e.pageY || e.pageX)
                          ? e.pageX
                          : e.touches[0].pageX),
                      ie &&
                        tt(e) &&
                        (G.scrollBar || !G.autoScrolling) &&
                        ((t.y = e.touches[0].pageY),
                        (t.x = e.touches[0].pageX)),
                      t
                    )
                  }
                  function Vt(e, t) {
                    Re(0, 'internal'),
                      void 0 !== t && (le = !0),
                      Dt(e.closest(H), e),
                      void 0 !== t && (le = !1),
                      Re(Se.scrollingSpeed, 'internal')
                  }
                  function Yt(e) {
                    var t = r.round(e)
                    if (G.css3 && G.autoScrolling && !G.scrollBar) {
                      var n = 'translate3d(0px, -' + t + 'px, 0px)'
                      Pt(n, !1)
                    } else
                      G.autoScrolling && !G.scrollBar
                        ? ae.css('top', -t)
                        : K.scrollTop(t)
                  }
                  function Gt(e) {
                    return {
                      '-webkit-transform': e,
                      '-moz-transform': e,
                      '-ms-transform': e,
                      transform: e
                    }
                  }
                  function Kt(t, n, r) {
                    'all' !== n
                      ? (de[r][n] = t)
                      : e.each(Object.keys(de[r]), function(e, n) {
                          de[r][n] = t
                        })
                  }
                  function Jt(e, t, n) {
                    ;(G[e] = t), 'internal' !== n && (Se[e] = t)
                  }
                  function Qt() {
                    e('html').hasClass(u)
                      ? Zt(
                          'error',
                          'Fullpage.js can only be initialized once and you are doing it multiple times!'
                        )
                      : (G.continuousVertical &&
                          (G.loopTop || G.loopBottom) &&
                          ((G.continuousVertical = !1),
                          Zt(
                            'warn',
                            'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled'
                          )),
                        G.scrollBar &&
                          G.scrollOverflow &&
                          Zt(
                            'warn',
                            'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox'
                          ),
                        !G.continuousVertical ||
                          (!G.scrollBar && G.autoScrolling) ||
                          ((G.continuousVertical = !1),
                          Zt(
                            'warn',
                            'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled'
                          )),
                        G.scrollOverflow &&
                          !G.scrollOverflowHandler &&
                          ((G.scrollOverflow = !1),
                          Zt(
                            'error',
                            'The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.'
                          )),
                        e.each(
                          [
                            'fadingEffect',
                            'continuousHorizontal',
                            'scrollHorizontally',
                            'interlockedSlides',
                            'resetSliders',
                            'responsiveSlides',
                            'offsetSections',
                            'dragAndMove',
                            'scrollOverflowReset',
                            'parallax'
                          ],
                          function(e, t) {
                            G[t] &&
                              Zt(
                                'warn',
                                'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: ' +
                                  t
                              )
                          }
                        ),
                        e.each(G.anchors, function(t, n) {
                          var r = Y.find('[name]').filter(function() {
                              return (
                                e(this).attr('name') &&
                                e(this)
                                  .attr('name')
                                  .toLowerCase() == n.toLowerCase()
                              )
                            }),
                            o = Y.find('[id]').filter(function() {
                              return (
                                e(this).attr('id') &&
                                e(this)
                                  .attr('id')
                                  .toLowerCase() == n.toLowerCase()
                              )
                            })
                          ;(o.length || r.length) &&
                            (Zt(
                              'error',
                              'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).'
                            ),
                            o.length &&
                              Zt(
                                'error',
                                '"' +
                                  n +
                                  '" is is being used by another element `id` property'
                              ),
                            r.length &&
                              Zt(
                                'error',
                                '"' +
                                  n +
                                  '" is is being used by another element `name` property'
                              ))
                        }))
                  }
                  function Zt(e, t) {
                    console && console[e] && console[e]('fullPage: ' + t)
                  }
                }
              })(e, i, i.document, i.Math)
            }.apply(t, r)) || (e.exports = o)
      })('undefined' != typeof window ? window : this)
    }
  }
])
